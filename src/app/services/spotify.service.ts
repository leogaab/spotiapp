import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Token expires after an hour
  token = '';

  newReleasesUrl = 'https://api.spotify.com/v1/browse/new-releases';
  searchUrl = 'https://api.spotify.com/v1/search';

  constructor(
    private http: HttpClient
  ) {
    console.log('SpotifyService listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get(this.newReleasesUrl, {headers});
  }

  // Finish get artist
  getArtist(searchValue: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get(this.newReleasesUrl, {headers});

  }
}
