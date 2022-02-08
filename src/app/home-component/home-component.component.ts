import { Product } from '../Product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Client, ServeiPressupostService } from '../servei-pressupost.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'pressupost';
  total: number = 0;
  preu: string = 'El preu total dels teus productes son: ';
  paginaWeb: boolean = false;
  totalPag: number = 0;
  totalId: number = 0;
  arrayProd:any[]= [];
  nameBudget: string="";
  nameClient: string="";
  arrayClients:Client[]=[];

  form: FormGroup;
  
  products: Product[] = [
    { id: 0, price: 500, name: "Una pàgina web (500 €)" },
    { id: 1, price: 300, name: "Una campanya SEO (300 €)" },
    { id: 2, price: 200, name: "Una campanya de publicitat (200 €)" }
  ];

  constructor(fb: FormBuilder, private meuServei:ServeiPressupostService, 
    private _location: Location) {
    this.form = fb.group({
     selected:  new FormArray([])
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getDate(){
    let date:Date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let resultatDate = ""; 
    if(month < 10){
      resultatDate = (`${day}-0${month}-${year}`)
    }else{
      resultatDate = (`${day}-${month}-${year}`)
    }
    return resultatDate;
  }

  addBudget(newName: string, newClient:string) {
    this.nameBudget = newName;
    this.nameClient = newClient;
    console.log(this.nameBudget, this.nameClient);
    this.meuServei.addDadesClient(this.nameBudget, this.nameClient);
  }

  onCheckboxChange(event: any) {
    if ( event.target.checked ) {
      if(event.target.id === "0"){
        this.paginaWeb = true;
      }
      // Afegim el producte
      this.arrayProd.push(event.target.id);
    }else{
      if(event.target.id === "0"){
        this.paginaWeb = false;
      }
      // Filtrem el resultat de l'array de productes seleccionats
      this.arrayProd = this.arrayProd.filter(el => !(event.target.id).includes(el))
    }
    this.total = (this.meuServei.pressupost(this.arrayProd, 
                  this.totalId, this.totalPag));
  }


  itemPanell(newItem: any) {
    if(newItem.id === "paginas"){
      this.totalPag = parseInt(newItem.value);
    }else{
      this.totalId = parseInt(newItem.value);
    }

    this.total = (this.meuServei.pressupost(this.arrayProd, 
                  this.totalId, this.totalPag));    
  }

  onClicked(){
    this.meuServei.mostraMissatge(this.preu, this.total, this.nameBudget, this.nameClient);
    this.arrayClients = (this.meuServei.generador(this.nameBudget, this.nameClient, this.total, this.getDate()));
  }

  onClickedBack(){
    this._location.back();
  }

  addItemPage(item: number){
    this.totalPag = item + 1;
    this.total = (this.meuServei.pressupost(this.arrayProd, 
                      this.totalId, this.totalPag));
  }

  addItemLanguage(item:number){
    this.totalId = item + 1;
    this.total = (this.meuServei.pressupost(this.arrayProd, 
                  this.totalId, this.totalPag));
  }

  restItemPage(item: number){
    this.totalPag = item - 1;
    this.total = (this.meuServei.pressupost(this.arrayProd, 
                  this.totalId, this.totalPag));
  }

  restItemLanguage(item: number){
    this.totalId = item - 1;
    this.total = (this.meuServei.pressupost(this.arrayProd, 
                  this.totalId, this.totalPag));
  }

  alfa(){
    this.meuServei.alfabeticament();
  }
  
  orderDate(){
    this.meuServei.orderPerDate();
  }

  reinicialitzarOrdre(){
    this.meuServei.reinitalitzar();
  }

}

