import { Injectable } from '@angular/core';
import { MovieRepository } from '../repository/movies.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private repo: MovieRepository) {}

  public getAllMovies() {
    return this.repo.getAllMovies();
  }

  public getMovieByName(name: string) {
    return this.repo.getMovieByName(name);
  }
}
