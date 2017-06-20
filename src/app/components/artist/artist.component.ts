import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artista:any;
  canciones:any[];

  constructor( private _activatedRoute: ActivatedRoute,
               private _spotifyService: SpotifyService ) { }

  ngOnInit() {

    this._activatedRoute.params
        .map( parametros => parametros['id'] )
        .subscribe( id => {

          this._spotifyService.getArtista( id )
              .subscribe( data => this.artista = data );

          this._spotifyService.getTop( id )
              .subscribe( data => this.canciones = data );
        })
  }

}
