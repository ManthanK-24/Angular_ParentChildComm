import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustcompoComponent } from './custcompo/custcompo.component';

const routes: Routes = [
  {path:'segments/MyDemo',component:CustcompoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegmentsRoutingModule { }
