import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AlbumService } from '../../services/album/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  public album: Album;
  public errorMessage: any;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _as: AlbumService) {

  }

  ngOnInit() {
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

}
