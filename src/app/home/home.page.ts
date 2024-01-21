import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { catchError, map, of } from 'rxjs';
import { Result } from 'src/app/core/models/result';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movies: any[] = [];
  loading: boolean = true;

  constructor(
    private movieService: MovieService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getAllMovies();
  }

  async searchMovie(event: any) {
    const text = event.detail.value;
    if (text.length === 0) {
      this.getAllMovies();
      return;
    }

    this.movieService
      .getMovieByName(text)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        if (response.error) {
          console.log('Error: ', response.error);
        }

        console.log(response.results);
        this.movies = response.results;
      });
  }

  getAllMovies() {
    this.movieService
      .getAllMovies()
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        if (response.error) {
          console.log('Error: ', response.error);
        }

        this.movies = response.results;
      });
  }

  openDetails(movieId: number) {
    const movie = this.movies.find((movie) => movie.id === movieId);
    console.log(movie);

    this.navCtrl.navigateForward(['/details'], { queryParams: movie });
  }
}
