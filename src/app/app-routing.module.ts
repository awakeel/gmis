import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from './layouts/basic/basic.component';


const routes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      {
        path: 'applications',
        loadChildren: () => import('./applications/applications.module').then(m=>  m.ApplicationsModule )
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m=>  m.UsersModule )
      }
    ]

  }
  ,
{ path: '', pathMatch: 'full', redirectTo: 'applications' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
