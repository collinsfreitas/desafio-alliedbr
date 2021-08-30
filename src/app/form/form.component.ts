import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from '../services/generic-service.service';
import { filter } from 'rxjs/operators'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  plans: any;
  sku: any;
  planID: any;
  platID: any
  formData: any;

  constructor(
    private services: GenericService,
    private activatedRoute: ActivatedRoute,


  ) { }

  ngOnInit(): void {
    this.platID = localStorage.getItem('platID');

    this.getCodeFromURL();
    this.getPlanbyID();

    this.formData = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      nascimento: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      plataforma: new FormControl(this.platID),
      plano: new FormControl(this.sku),
    });
  }

  getCodeFromURL(): any {
    this.activatedRoute.params.subscribe(parameter => {
      this.sku = parameter.sku;
    })

  }

  getPlanbyID() {

    this.services.getPlansById(this.platID).subscribe((res) => {
      this.plans = res.planos;
      this.planID = this.plans.filter((a: any) => a.sku === this.sku);
    })
  }

  onSubmit() {
    console.log(this.formData.value);
  }

}
