import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import { BasicLayoutComponent } from './basic/basic.component';
const Components = [ BasicLayoutComponent ];
@NgModule({
  declarations: [ ...Components ],
  imports: [
    SharedModule
  ],
  exports:[...Components]
})
export class LayoutsModule { }
