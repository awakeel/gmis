import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddApplicationComponent } from './pages/add/add.component';
import { ListApplicationComponent } from './pages/list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add' },
  {
    path: 'add',
    component: AddApplicationComponent
  },
  {
    path: 'list',
    component: ListApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
