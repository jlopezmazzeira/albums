import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AlbumService } from '../../services/album/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  public titulo: string;
  public albums: Album[];
  public errorMessage: any;
  public loading: boolean;
  public confirmado;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _as: AlbumService) {
    this.titulo = 'Listado de Álbumes';

  }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(){
    this.loading = true;
    this._as.getAlbums().subscribe(
      result => {
        this.albums = result.albums;
        if(!this.albums){
          alert('Error en el servidor');
        }
        this.loading = false;
      },
      error => {
        this.errorMessage = <any> error;
        if(this.errorMessage != null){
          console.log(this.errorMessage);
        }
      }
    );
  }

  onBorrarConfirm(id){
    this.confirmado = id;
  }

  onCancelarConfirm(){
    this.confirmado = null;
  }

  onBorrarAlbum(id){
    this._as.deleteAlbum(id).subscribe(
      response => {
        if(!response.album){
          alert('Error en el servidor');
        } else {
          this.confirmado = null;
          this.getAlbums();
        }
      },
      error => {
        this.errorMessage = <any>error;
        if(this.errorMessage != null){
          console.log(this.errorMessage);
          alert('Error en la petición');
        }
      }
    );
  }

}
