import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { PlayListComponent } from './pages/play-list/play-list.component';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, AjudaComponent, FooterComponent, PlayListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
