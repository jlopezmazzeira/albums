import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AlbumService } from '../../services/album/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {

  public titulo: string;
  public album: Album;
  public errorMessage: any;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _as: AlbumService) {

    this.titulo = 'Editar Álbum';
  }

  ngOnInit() {
    this.album = new Album("", "", "");
    this.getAlbum();
  }

  getAlbum(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._as.getAlbum(id).subscribe(
        result => {
          this.album = result.album;
          if(!this.album){
            this._router.navigate(['/']);
          }
        },
        error => {
          this.errorMessage = <any> error;
          if(this.errorMessage != null){
            console.log(this.errorMessage);
            this._router.navigate(['/']);
          }
        }
      );

    });
  }

  onSubmit(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._as.editAlbum(this.album).subscribe(
        response => {
          this.album = response.album;
          if(!response.album){
            alert("Error en el servidor");
          } else {
            this._router.navigate(['/album', id]);
          }
        },
        error => {
          this.errorMessage = <any> error;
          if(this.errorMessage != null){
            console.log(this.errorMessage);
          }
        }
      );
    });

  }

}
