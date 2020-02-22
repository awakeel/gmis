import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {LayoutsModule} from '../layouts/layouts.module';
@NgModule({
  declarations: [],
  imports: [
      SharedModule,
      LayoutsModule
  ]
})
export class CoreModule { }
