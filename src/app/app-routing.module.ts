import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomecomponentComponent} from './homecomponent/homecomponent.component';
import { MoviescomponentComponent} from './moviescomponent/moviescomponent.component';

const routes: Routes = [
  { path: 'home', component: HomecomponentComponent},
  { path: 'movies', component: MoviescomponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
