import { NgModule } from '@angular/core';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { AddApplicationComponent } from './pages/add/add.component';
import { ListApplicationComponent } from './pages/list/list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
const components = [AddApplicationComponent, ListApplicationComponent];

@NgModule({
  declarations: [...components],
  imports: [
    SharedModule,
    ApplicationsRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class ApplicationsModule { }
