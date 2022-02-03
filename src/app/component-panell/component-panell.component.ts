import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-panell',
  templateUrl: './component-panell.component.html',
  styleUrls: ['./component-panell.component.css']
})
export class ComponentPanellComponent implements OnInit {

  paginas: number = 0;
  idiomas: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() addPage = new EventEmitter<number>();
  @Output() addLanguage = new EventEmitter<number>();
  @Output() restPage = new EventEmitter<number>();
  @Output() restLanguage = new EventEmitter<number>();

  addNewItem(event: any) {

    if(event.target.id === "paginas"){
      this.paginas = event.target.value;
    } else{
      this.idiomas = event.target.value;
    }
    this.newItemEvent.emit(event.target);
  }

  addPagina(){
    this.addPage.emit(this.paginas++);
  }

  restPagina(){
    this.restPage.emit(this.paginas--);
  }

  addIdioma(){
    this.addLanguage.emit(this.idiomas++);
  }
  restIdioma(){
    this.restLanguage.emit(this.idiomas--); 
  }

}
