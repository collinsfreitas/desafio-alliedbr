import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  public plans: any;
  public sku: any;
  nome: any;
  ativo = true;

  constructor(
    private services: GenericService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.nome = localStorage.getItem('platName');

    this.getSkuFromURL();
    this.getPlansbyID();

  }

  getSkuFromURL() {
    this.activatedRoute.params.subscribe(parameter => {
      this.sku = parameter.sku;
    })

  }

  getPlansbyID() {
    this.services.getPlansById(this.sku).subscribe((res) => {
      this.plans = res;
    })
  }

}
