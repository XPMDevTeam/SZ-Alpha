import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { SzcategoryComponent } from './szcategory/szcategory.component';
import { CustomerregisterComponent } from './customerregister/customerregister.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminComponent ,
    children: [
      {
        path: 'category', component: SzcategoryComponent
      },
      {
        path: 'custreg', component: CustomerregisterComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
