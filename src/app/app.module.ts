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


@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, AjudaComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
