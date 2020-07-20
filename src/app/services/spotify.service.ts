import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  newReleasesUrl = 'https://api.spotify.com/v1/browse/new-releases';

  constructor(
    private http: HttpClient
  ) {
    console.log('SpotifyService listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDq6KM4xg4GNjOq3XtvvovJjYjwjRG6A5Eg-tIdd629GfYMqi5UnoD2OpoysSJOq8yOgCOd2eHC0nK9tnU'
    });

    return this.http.get(this.newReleasesUrl, {headers});
  }
}
