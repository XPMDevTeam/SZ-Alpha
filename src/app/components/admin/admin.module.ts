import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MatTabsModule } from '@angular/material/tabs';

import { SzcategoryComponent } from './szcategory/szcategory.component';
import { AdmintabComponent } from './admintab/admintab.component';
import { CustomerregisterComponent } from './customerregister/customerregister.component';


@NgModule({
  declarations: [
    AdminComponent,
    SzcategoryComponent,
    AdmintabComponent,
    CustomerregisterComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule
  ]
})
export class AdminModule { }
