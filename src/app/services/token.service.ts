
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

const ACCESS_TOKEN: string = 'access_token';
const REFRESH_TOKEN: string = 'refresh_token';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  constructor() { }

  getToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  saveToken(token?: string): void {
    token ? localStorage.setItem(ACCESS_TOKEN, token) : localStorage.setItem(ACCESS_TOKEN, '')
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (!token) {
      return;
    }
    return jwtDecode(token);
  }

  getUsername(): string | null {
    const decodedToken = this.getDecodedToken();
    return decodedToken ? decodedToken.username : null;
  }

  isTokenExpired(): boolean {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {
      const expirationDate = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      return expirationDate < new Date();
    }
    return true;
  }
}
