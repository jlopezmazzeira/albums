import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ImageService } from '../../services/image/image.service';
import { Image } from '../../models/image';

@Component({
  selector: 'image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {

  public titulo: string;
  public image: Image;
  public errorMessage: any;
  public is_edit: boolean;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _is: ImageService) {
    this.titulo = 'Editar imagen';
    this.is_edit = true;
  }

  ngOnInit() {
    this.image = new Image("", "", "", "");
    this.getImage();
  }

  getImage(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._is.getImage(id).subscribe(
        response => {
          this.image = response.image;
          if(!response.image){
            this._router.navigate(['/']);
          }
        },
        error => {
          this.errorMessage = <any> error;
          if(this.errorMessage != null){
            console.log(this.errorMessage);
          }
        }
      )
    });
  }

  onSubmit(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._is.editImage(this.image).subscribe(
        response => {
          this.image = response.image;
          if(!response.image){
            alert("Error en el servidor");
          } else {
            //Subir Foto
          }
          this._router.navigate(['/album', this.image.album]);
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
