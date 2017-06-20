import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  urlBase:string = "https://api.spotify.com/v1/search"
  urlArtista:string = "https://api.spotify.com/v1/artists"

  constructor( private _http:Http) { }

  getArtistas ( nombre: string ) {

    let headers = new Headers()
    headers.append( 'authorization', 'Bearer BQAY86E1-uCmCxs-DGcrnfldkerwH3WPYtDlKiAw3IWTCHSFxqWPgVRiXD-paNLSI3IZU6NqlVZMXj9BQFNqhw' )

    let params = `?q=${ nombre }&type=artist`
    let url = this.urlBase + params;

    return this._http.get( url, { headers } )
               .map ( response => {
                 console.log ( response )
                 this.artistas = response.json().artists.items
               })

  }

  getArtista ( id: string ) {

    let headers = new Headers()
    headers.append( 'authorization', 'Bearer BQAY86E1-uCmCxs-DGcrnfldkerwH3WPYtDlKiAw3IWTCHSFxqWPgVRiXD-paNLSI3IZU6NqlVZMXj9BQFNqhw' )

    let params = `/${ id }`
    let url = this.urlArtista + params;

    return this._http.get( url, { headers }  )
               .map ( response => {
                 return response.json()
               })

  }

  getTop( id: string ) {

    let headers = new Headers()
    headers.append( 'authorization', 'Bearer BQAY86E1-uCmCxs-DGcrnfldkerwH3WPYtDlKiAw3IWTCHSFxqWPgVRiXD-paNLSI3IZU6NqlVZMXj9BQFNqhw' )

    let params = `/${ id }/top-tracks?country=ES`
    let url = this.urlArtista + params;

    return this._http.get( url, { headers }  )
               .map ( response => {
                 console.log( response.json().tracks )
                 return response.json().tracks
               })

  }

}
