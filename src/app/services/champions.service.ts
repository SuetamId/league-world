import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChampionDetails } from '../models/champions.model';
import { BehaviorSubject, catchError, distinctUntilChanged, map, Observable, shareReplay, switchMap} from 'rxjs';
import { environment } from '../environments/environments';
import { SnackBarService } from './snack-bar.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private searchTermSubject = new BehaviorSubject<string>('');
  public searchTerm$ = this.searchTermSubject.asObservable();
  private favoritesSubject = new BehaviorSubject<ChampionDetails[]>(this.getFavoritesFromLocalStorage());
  public favorites$ = this.favoritesSubject.asObservable();
  constructor(private http: HttpClient, private snackbarService: SnackBarService, private router: Router) { }

  updateSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }

  championDetails(champion: ChampionDetails) {
    this.router.navigate([`/champion-details/${champion.name.trim()}`]);
    this.updateSearchTerm('');
  }

  getAll(): Observable<ChampionDetails[]> {
    return this.searchTerm$.pipe(
      distinctUntilChanged(),
      switchMap((term: string) => {
        return this.http.get<ChampionDetails[]>(
          `${environment.api_url_endpoint}/champions?lang=pt_BR`).pipe(
            map((champions) => {
              if (!term.trim()) {
                return champions;
              }

            return champions.filter((champion: ChampionDetails) =>
              champion.name.toLowerCase().includes(term.toLowerCase()));
          }),
          catchError((error) => {
            console.error('Erro ao buscar campeões:', error);
            throw error;
          })
        );
      }),
      shareReplay(1)
    );
  }

  getByName(name: string): Observable<ChampionDetails> {
    return this.http.get<ChampionDetails>(`${environment.api_url_endpoint}/champions/${name}?lang=pt_BR`)
  }

  addFavorite(champion: ChampionDetails): void {
    const currentFavorites = this.favoritesSubject.value;
    if (!currentFavorites.find((fav) => fav.name === champion.name)) {
      const updatedFavorites = [...currentFavorites, champion];
      this.saveFavoritesToLocalStorage(updatedFavorites);
      this.favoritesSubject.next(updatedFavorites);
      this.snackbarService.openSnackBar(`${champion.name} foi adicionado aos favoritos 🌟`, 'x')
    } else{
      this.snackbarService.openSnackBar(`Opa, ${champion.name} já está nos favoritos ❤️`, 'x')
    }
  }

  removeFavorite(champion: ChampionDetails): void {
    const updatedFavorites = this.favoritesSubject.value.filter((fav) => fav.name !== champion.name);
    this.saveFavoritesToLocalStorage(updatedFavorites);
    this.favoritesSubject.next(updatedFavorites);
    this.snackbarService.openSnackBar(`${champion.name} foi removido dos favoritos!`, 'x')
  }

  private getFavoritesFromLocalStorage(): ChampionDetails[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  private saveFavoritesToLocalStorage(favorites: ChampionDetails[]): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
