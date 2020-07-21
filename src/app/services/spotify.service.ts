import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Token expires after an hour
  token = 'BQAunWUTBeFQlkDKtrfOfqP8PypybiWz1g1h1Qz5Q2gP54N2kNeuIq-31faC774BwVM-nU6t57uLrleb4Ow';

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

    return this.http.get(this.newReleasesUrl, {headers})
           .pipe( map( (data: any) => data.albums.items) );
  }

  // Finish get artist
  getArtist(searchValue: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get(`${ this.searchUrl }?q=${ searchValue }&type=artist&limit=15&`, {headers})
           .pipe( map( (data: any) => data.artists.items) );
  }
}
