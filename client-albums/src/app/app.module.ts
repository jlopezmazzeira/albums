import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { appRoutingProviders, routing} from './app.routing';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumAddComponent } from './components/album-add/album-add.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumEditComponent } from './components/album-edit/album-edit.component';

import { AlbumService } from './services/album/album.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumAddComponent,
    AlbumDetailComponent,
    AlbumEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
