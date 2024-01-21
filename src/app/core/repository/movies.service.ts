import { Injectable, Injector } from '@angular/core';
import { Repository } from '../base/repository.repository';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root',
})
export class MovieRepository extends Repository {
  constructor(injector: Injector) {
    super(injector);
  }

  public getAllMovies() {
    return this.doSimpleRequest<Result>('get', `/movie/popular`);
  }

  public getMovieByName(name: string) {
    return this.doRequest<Result>('get', `/search/movie`, `query=${name}`);
  }
}
