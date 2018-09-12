import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Album } from '../../models/album';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  public url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getAlbums(){
    return this._http.get(this.url+'albums')
                     .pipe(map(res => res.json()));
  }

  addAlbum(album: Album){
    let json = JSON.stringify(album);
    let params = json;
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url+'album/', params, {headers: headers})
                    .pipe(map(res => res.json()));

  }

  getAlbum(id: string){
    return this._http.get(this.url+'album/'+id)
                     .pipe(map(res => res.json()));
  }

  editAlbum(album: Album){
    let json = JSON.stringify(album);
    let params = json;
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.put(this.url+'album/'+album._id, params, {headers: headers})
                    .pipe(map(res => res.json()));
  }

  deleteAlbum(id: string){
    return this._http.delete(this.url+'album/'+id)
                     .pipe(map(res => res.json()));
  }
}
