import { HttpClient, HttpParams } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class Repository {
  private paths = Object.freeze({
    dev: 'https://api.themoviedb.org/3',
    imgUrl: 'https://image.tmdb.org/t/p/w500',
    api_key: '27df66bb62a60271c5ef70ce757a4c8a',
  });
  protected basePath = this.paths.dev;
  protected apiKey = this.paths.api_key;
  protected imgPath = this.paths.imgUrl;
  protected http: HttpClient = this.injector.get(HttpClient);

  constructor(protected injector: Injector) {}

  protected doSimpleRequest<T>(
    method: keyof HttpClient,
    url: string,
    body: unknown = undefined,
    params?: keyof HttpParams
  ): Observable<T> {
    return this.http.request<T>(
      method,
      `${this.basePath}${url}?api_key=${this.apiKey}`,
      { body }
    );
  }

  protected doRequest<T>(
    method: keyof HttpClient,
    url: string,
    params?: string
  ): Observable<T> {
    return this.http.request<T>(
      method,
      `${this.basePath}${url}?api_key=${this.apiKey}&${params}`
    );
  }
}
