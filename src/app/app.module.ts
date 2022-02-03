import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServeiPressupostService } from './servei-pressupost.service';
import { ComponentPanellComponent } from './component-panell/component-panell.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { InstruccionsComponentComponent } from './instruccions-component/instruccions-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path: '', component:WelcomeComponentComponent},
  {path: 'home', component:HomeComponentComponent},
  {path: 'instruccions', component:InstruccionsComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentPanellComponent,
    WelcomeComponentComponent,
    HomeComponentComponent,
    InstruccionsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ServeiPressupostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
