import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiPressupostService {
  precio:number = 0;
  client: string="Client anonim";
  nomPresupost:string="Anonim";
  arrayClients:Client[]=[
    new Client("Pressupost_1", "Client_1", 350, "5-01-2022"),
    new Client("Pressupost_3", "Client_3", 850, "4-01-2022"),
    new Client("Pressupost_4", "Client_4", 600, "3-01-2022"),
    new Client("Pressupost_2", "Client_2", 250, "1-01-2022"),
  ];

  constructor() { }

  mostraMissatge(mensaje:string, resultat:number, nomPresupost:string, nomClient:string){
    alert("El client: " + nomClient + " a efectuat un contracte amb el nom del pressupost: " +
          nomPresupost + ".\n" + mensaje + resultat + " €.")
  }

  pressupost(array:Array<string>, idiomes:number, pagines:number){
    this.precio = 0;

    let sumaPanell = (idiomes * pagines * 30);
    // Donem per suposat que el primer producte està inclòs. Preu= 500;
    if(array.includes("0")){
      this.precio += 500;
    }
    if(array.includes("1")){
      this.precio += 300;
    }
    if(array.includes("2")){
      this.precio += 200;
    }
    this.precio += sumaPanell;
    
    return this.precio;
  }

  addDadesClient(nomPresupost: string, client: string){
    this.client = client; 
    this.nomPresupost = nomPresupost;
  }

  generador(pressupost:string, client:string, preu:number, data:string){

    let dadesClient:Client = new Client(pressupost, client, preu, data);
    this.arrayClients.push(dadesClient);
    console.log(this.arrayClients);
    return (this.arrayClients);
  }

  getDades(){
    return this.arrayClients;
  }

  alfabeticament(){
    this.arrayClients.sort((a,b)=>(a.nomPresupost > b.nomPresupost)? 1 : -1);
  }

  orderPerDate(){
    this.arrayClients.sort((a,b)=>(a.data > b.data)? 1 : -1);
  }

  reinitalitzar(){
    this.arrayClients=[];
    console.log(this.getDades());
  }

  
}

export class Client {
  nomPresupost: string;
  client: string;
  preuFinal: number;
  data:string;

  constructor(nomPresupost: string, client: string, preuFinal: number, data:string) {
    this.nomPresupost = nomPresupost;
    this.client = client;
    this.preuFinal = preuFinal;
    this.data = data;
  }
}
