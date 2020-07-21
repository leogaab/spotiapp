import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Token expires after an hour
  token = 'BQAunWUTBeFQlkDKtrfOfqP8PypybiWz1g1h1Qz5Q2gP54N2kNeuIq-31faC774BwVM-nU6t57uLrleb4Ow';

  url = 'https://api.spotify.com/v1/';

  constructor(
    private http: HttpClient
  ) {
    console.log('SpotifyService listo');
  }

  getQuery( url: string) {
    const query = this.url + url;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get(query, {headers});
  }

  getNewReleases() {
    const newReleasesUrl = 'browse/new-releases';

    return this.getQuery(newReleasesUrl).pipe( map( (data: any) => data.albums.items) );
  }
  
  getArtist(searchValue: string) {
    const searchUrl = 'search?q=' + searchValue + '&type=artist&limit=15&';

    return this.getQuery(searchUrl).pipe( map( (data: any) => data.artists.items) );
  }
}
