import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MyPopupComponent } from '../my-popup/my-popup.component';

@Component({
  selector: 'app-component-panell',
  templateUrl: './component-panell.component.html',
  styleUrls: ['./component-panell.component.css']
})
export class ComponentPanellComponent implements OnInit {

  paginas: number = 0;
  idiomas: number = 0;

  constructor(private modalService: NgbModal) { }

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

  infoPagina() {
    const modalRef = this.modalService.open(MyPopupComponent);
    modalRef.componentInstance.title = 'Informació sobre la pàgina';
    modalRef.componentInstance.text = "Aquest component indica el nombre de pàgines que " +
                                      "tindrà la seva pàgina web";
  }

  infoIdioma() {
    const modalRef = this.modalService.open(MyPopupComponent);
    modalRef.componentInstance.title = 'Informació sobre idiomes';
    modalRef.componentInstance.text = "Aquest component indica el nombre de idiomes " +
                                      "que tindrà la seva pàgina web";
  }

}
