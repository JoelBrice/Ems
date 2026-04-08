import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  get<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(this.toUrl(path), { params });
  }

  post<T, TPayload>(path: string, payload: TPayload): Observable<T> {
    return this.http.post<T>(this.toUrl(path), payload);
  }

  put<T, TPayload>(path: string, payload: TPayload): Observable<T> {
    return this.http.put<T>(this.toUrl(path), payload);
  }

  private toUrl(path: string): string {
    return `${this.baseUrl}/${path.replace(/^\//, '')}`;
  }
}
