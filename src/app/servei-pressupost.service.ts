import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiPressupostService {
  precio:number = 0;

  constructor() { }

  mostraMissatge(mensaje: string, resultat:number){
    alert(mensaje + resultat + " €.")
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
}
