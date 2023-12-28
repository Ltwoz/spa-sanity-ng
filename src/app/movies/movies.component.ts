import { Component } from '@angular/core';
import { SanityService } from '../service/sanity.service';
import { Movie } from '../types/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(private sanityService: SanityService) {}

  movies: Movie[] = [];

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies(): Promise<Movie[]> {
    this.movies = await this.sanityService.getMovies();
    return this.movies;
  }
}
