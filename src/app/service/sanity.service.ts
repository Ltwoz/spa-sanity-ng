import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
import { Movie } from '../types/movie';
import { Actor } from '../types/actor';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  constructor() {}

  sanityClientCredentials = {
    option: sanityClient({
      projectId: 'mxv223ux',
      dataset: 'production',
    }),
  };

  urlFor = (source: any) =>
    ImageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async getMovies(): Promise<Movie[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "movie"]{
        _id,
        title,
        overview,
        releaseDate,
        poster
      }`
    );
  }

  async getActors(): Promise<Actor[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "person"]{
        _id,
        name,
        image
      }`
    );
  }
}
