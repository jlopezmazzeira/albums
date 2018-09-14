import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ImageService } from '../../services/image/image.service';
import { Image } from '../../models/image';

@Component({
  selector: 'image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  public image: Image;
  public loading: boolean;
  public errorMessage: any;
  public apiUrl: string;
  public confirmado;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _is: ImageService) {


  }

  ngOnInit() {
    this.apiUrl = this._is.getApiUrl('get-image/');
    this.getImage();
  }

  getImage(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._is.getImage(id).subscribe(
        result => {
          this.image = result.image;
          if(!this.image){
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

  onBorrarConfirm(id){
    this.confirmado = id;
  }

  onCancelarConfirm(){
    this.confirmado = null;
  }

  onBorrarImage(id){
    this._is.deleteImage(id).subscribe(
      response => {
        if(!response.image){
          alert('Error en el servidor');
        } else {
          this.confirmado = null;
          this._router.navigate(['/album', response.image.album]);
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
