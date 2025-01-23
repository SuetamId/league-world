import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environments';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(loginModel: Login): Observable<any> {
    return this.http.post<{ token: string }>(`${environment.api_url_endpoint}/login`,loginModel)
      .pipe(
        tap(response => {
          this.tokenService.saveToken(response.token);
        })
      );
  }

  register(user: User): Observable<User>{
    return this.http.post<User>(`${environment.api_url_endpoint}/register`, user);
  }

  logout(): void {
    this.tokenService.removeToken();
  }

  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }
}
