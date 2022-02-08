import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiPressupostService {
  precio:number = 0;
  client: string="Client anonim";
  nomPresupost:string="Anonim";
  arrayClients:Client[]=[
    new Client("pressupost_1", "Client_1", 350)
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

  generador(pressupost:string, client:string, preu:number){
    let dadesClient:Client = new Client(pressupost, client, preu);
    this.arrayClients.push(dadesClient);
    console.log(this.arrayClients);
    return (this.arrayClients);
  }

  getDades(){
    return this.arrayClients;
  }
}

export class Client {
  nomPresupost: string;
  client: string;
  preuFinal: number;

  constructor(nomPresupost: string, client: string, preuFinal: number) {
    this.nomPresupost = nomPresupost;
    this.client = client;
    this.preuFinal = preuFinal;
  }
}
