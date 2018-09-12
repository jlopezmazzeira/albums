import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumAddComponent } from './components/album-add/album-add.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumEditComponent } from './components/album-edit/album-edit.component';

const appRoutes: Routes = [
  { path: '', component: AlbumListComponent },
  { path: 'crear-album', component: AlbumAddComponent},
  { path: 'album/:id', component: AlbumDetailComponent},
  { path: 'edit-album/:id', component: AlbumEditComponent},
  { path: '**', component: AlbumListComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
