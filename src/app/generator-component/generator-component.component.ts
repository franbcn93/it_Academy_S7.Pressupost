import { Component, OnInit } from '@angular/core';
import { ServeiPressupostService } from '../servei-pressupost.service';

@Component({
  selector: 'app-generator-component',
  templateUrl: './generator-component.component.html',
  styleUrls: ['./generator-component.component.css']
})
export class GeneratorComponentComponent implements OnInit {
  

  constructor(private servei: ServeiPressupostService) { }

  ngOnInit(): void {
  }

  
}
