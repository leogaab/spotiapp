import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];

  constructor( private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases()
      .subscribe( (response: any) => {
        console.log(response.albums.items);
        this.newReleases = response.albums.items;
      });
  }

  ngOnInit() {}

}
