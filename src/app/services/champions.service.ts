import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChampionDetails } from '../models/champions.model';
import { BehaviorSubject, catchError, distinctUntilChanged, map, Observable, shareReplay, switchMap} from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private searchTermSubject = new BehaviorSubject<string>('');
  public searchTerm$ = this.searchTermSubject.asObservable();

  constructor(private http: HttpClient) { }

  updateSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }

  getAll(): Observable<ChampionDetails[]> {
    return this.searchTerm$.pipe(
      distinctUntilChanged(),
      switchMap((term: string) => {
        return this.http.get<ChampionDetails[]>(
          `${environment.api_url_endpoint}/champions?lang=pt_BR`
        ).pipe(
          map((champions) => {

            if (!term.trim()) {
              return champions;
            }

            return champions.filter((champion: ChampionDetails) =>
              champion.name.toLowerCase().includes(term.toLowerCase())
            );
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

}
