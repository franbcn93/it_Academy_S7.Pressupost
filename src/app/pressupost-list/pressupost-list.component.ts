import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent implements OnInit {

  @Output() newBudget = new EventEmitter<{name: string, client: string}>();
  

  constructor() { }

  ngOnInit(): void {
  }

  addNewBudget(name: string, client:string) {
    this.newBudget.emit({name:name, client: client});
  }

}
