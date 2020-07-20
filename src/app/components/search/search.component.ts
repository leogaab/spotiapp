import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
  }

  onSearch(searchValue: string) {
    console.log('Search: ', searchValue);
    this.spotifyService.getArtist(searchValue)
      .subscribe( response => console.log(response));
  }
}
