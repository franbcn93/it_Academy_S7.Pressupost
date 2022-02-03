import { Product } from './Product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ServeiPressupostService } from './servei-pressupost.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'pressupost';
  
  constructor() { }

  ngOnInit(): void {
  }

   
  
}

