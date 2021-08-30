import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() attributes: any;


  constructor() { }

  ngOnInit(): void {
  }

  setPlataform(platID: string, platName: string): void {
    localStorage.setItem('platID', platID);
    localStorage.setItem('platName', platName);
  }

}
