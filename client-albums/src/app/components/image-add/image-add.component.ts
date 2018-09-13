import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ImageService } from '../../services/image/image.service';
import { Image } from '../../models/image';

@Component({
  selector: 'image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {

  public titulo: string;
  public image: Image;
  public errorMessage: any;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _is: ImageService) {

   this.titulo = 'Añadir imagenes';
  }

  ngOnInit() {
    this.image = new Image("", "", "", "");
  }

  onSubmit(){
    this._route.params.forEach((params: Params) => {
      let album_id = params['album'];
      this.image.album = album_id;

      this._is.addImage(this.image).subscribe(
        response => {
          this.image = response.image;
          if(!response.image){
            alert("Error en el servidor");
          } else {
            this._router.navigate(['/editar-image', this.image._id]);
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
