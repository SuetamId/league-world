
import { Injectable } from '@angular/core';

const ACCESS_TOKEN:string = 'access_token';
const REFRESH_TOKEN:string = 'refresh_token';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  constructor() { }

  getToken(): string | null{
    return localStorage.getItem(ACCESS_TOKEN);
  }

  saveToken(token?: string): void{
    token ? localStorage.setItem(ACCESS_TOKEN, token) : localStorage.setItem(ACCESS_TOKEN, '')
  }

  removeToken(): void{
    localStorage.removeItem(ACCESS_TOKEN);
  }
}
