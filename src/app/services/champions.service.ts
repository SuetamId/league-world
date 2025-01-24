import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChampionDetails } from '../models/champions.model';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ChampionDetails[]> {
    return this.http.get<ChampionDetails[]>(`${environment.api_url_endpoint}/champions?lang=pt_BR`)
  }

  getByName(name: string): Observable<ChampionDetails> {
    return this.http.get<ChampionDetails>(`${environment.api_url_endpoint}/champions/${name}?lang=pt_BR`)
  }
}
