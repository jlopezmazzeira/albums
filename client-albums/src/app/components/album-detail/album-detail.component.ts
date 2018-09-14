import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ImageService } from '../../services/image/image.service';
import { AlbumService } from '../../services/album/album.service';
import { Album } from '../../models/album';
import { Image } from '../../models/image';

@Component({
  selector: 'album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  public album: Album;
  public images: Image[];
  public errorMessage: any;
  public apiUrl: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _as: AlbumService,
              private _is: ImageService) {

  }

  ngOnInit() {
    this.apiUrl = this._is.getApiUrl('get-image/');
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
          } else{
            this._is.getImages(id).subscribe(
              response => {
                this.images = response.images;
                if(!this.images){
                  alert("Sin imagenes");
                }
              },
              error => {
                this.errorMessage = <any> error;
                if(this.errorMessage != null){
                  console.log(this.errorMessage);
                }
              }
            )
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

}
