import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './myComponents/home/home.component';
import { AboutusComponent } from './myComponents/aboutus/aboutus.component';
import {MatCard, MatCardModule} from '@angular/material/card';
import { SigninComponent } from './myComponents/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MerchandiseComponent } from './myComponents/merchandise/merchandise.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    SigninComponent,
    MerchandiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
