import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlansComponent } from './plans/plans.component';
import { CardComponent } from './shared/card/card.component';
import { PlanCardComponent } from './shared/plan-card/plan-card.component';
import { FormComponent } from './form/form.component';
import { PlataformsComponent } from './plataforms/plataforms.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlanCardComponent,
    PlansComponent,
    FormComponent,
    PlataformsComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [HttpClientModule],


  bootstrap: [AppComponent]
})
export class AppModule { }
