import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayListComponent } from './pages/play-list/play-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path:'playlist', component: PlayListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
