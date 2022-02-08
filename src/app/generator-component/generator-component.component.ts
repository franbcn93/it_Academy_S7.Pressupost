import { Component, Input, OnInit } from '@angular/core';
import { Client, ServeiPressupostService } from '../servei-pressupost.service';

@Component({
  selector: 'app-generator-component',
  templateUrl: './generator-component.component.html',
  styleUrls: ['./generator-component.component.css']
})
export class GeneratorComponentComponent implements OnInit {
  

  constructor(private servei: ServeiPressupostService) { }

  ngOnInit(): void {
  }

  @Input() cliente:Client;
  @Input() indice:number;


  resultat(){
    console.log(this.servei.getDades());
  }
  
}
