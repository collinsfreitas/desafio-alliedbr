import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PlansComponent } from './plans/plans.component';
import { PlataformsComponent } from './plataforms/plataforms.component';

const routes: Routes = [
  { path: '', redirectTo: '/plataformas', pathMatch: 'full' },
  { path: 'plataformas', component: PlataformsComponent },
  { path: 'plataformas/planos/:sku', component: PlansComponent },
  { path: 'plataformas/planos/:sku/form/:sku', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
