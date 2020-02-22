import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

const Material = [MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ...Material,
    RouterModule
  ],
  exports: [
    ...Material,
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
