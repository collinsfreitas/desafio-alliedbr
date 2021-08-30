import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-plataforms',
  templateUrl: './plataforms.component.html',
  styleUrls: ['./plataforms.component.scss']
})
export class PlataformsComponent implements OnInit {

  public plataformsList: any;
  public platName: any;

  constructor(
    private services: GenericService
  ) { }

  ngOnInit(): void {
    this.services.getPlataformList('plataformas').subscribe((res) => {
      this.plataformsList = res.plataformas;
    })
  }

}
