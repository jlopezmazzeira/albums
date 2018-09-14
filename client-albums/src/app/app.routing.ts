import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumAddComponent } from './components/album-add/album-add.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumEditComponent } from './components/album-edit/album-edit.component';
import { ImageAddComponent } from './components/image-add/image-add.component';
import { ImageEditComponent } from './components/image-edit/image-edit.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';

const appRoutes: Routes = [
  { path: '', component: AlbumListComponent },
  { path: 'crear-album', component: AlbumAddComponent},
  { path: 'album/:id', component: AlbumDetailComponent},
  { path: 'editar-album/:id', component: AlbumEditComponent},
  { path: 'crear-image/:album', component: ImageAddComponent},
  { path: 'editar-image/:id', component: ImageEditComponent},
  { path: 'image/:id', component: ImageDetailComponent},
  { path: '**', component: AlbumListComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
