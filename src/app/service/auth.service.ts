import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticate_uri: string = "http://127.0.0.1:8081/api/auth/login";
  constructor(private http: HttpClient) { }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  public login(loginData: {usernameOrEmail: string, password: string}): Observable<boolean> {
    return this.http.post<any>(this.authenticate_uri, loginData).pipe(
      map(response => {
        const token = response.accessToken;
        console.log(response)
        if (token) {
          this.setToken(token);
          return true;
        }
        throw new Error('A resposta do servidor não contém um token de autenticação.');
      }),
      catchError(error => {
        return of(false);
      })
    );
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem("authToken") : null;
  }

  setToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem("authToken", token);
    }
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem("authToken");
    }
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      if (error.status === 401) {
        errorMessage = 'User not found or invalid password!';
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}
