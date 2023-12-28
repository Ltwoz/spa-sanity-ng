import { Component } from '@angular/core';
import { SanityService } from '../service/sanity.service';
import { Actor } from '../types/actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.css',
})
export class ActorsComponent {
  constructor(private sanityService: SanityService) {}

  actors: Actor[] = [];

  defaultImageUrl =
    'https://images.vexels.com/media/users/3/140384/isolated/preview/fa2513b856a0c96691ae3c5c39629f31-girl-profile-avatar-1-by-vexels.png';

  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.defaultImageUrl;
  }

  ngOnInit() {
    this.getActors();
  }

  async getActors(): Promise<Actor[]> {
    this.actors = await this.sanityService.getActors();
    return this.actors;
  }
}
