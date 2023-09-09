import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentsRoutingModule } from './segments-routing.module';
import { CustcompoComponent } from './custcompo/custcompo.component';
import { FormsModule } from '@angular/forms';
import { ChildcustcompoComponent } from './custcompo/childcustcompo/childcustcompo.component';


@NgModule({
  declarations: [CustcompoComponent, ChildcustcompoComponent],
  imports: [
    CommonModule,
    SegmentsRoutingModule,
    FormsModule
  ]
})
export class SegmentsModule { }
