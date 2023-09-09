import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustcompoComponent } from './multiple-components/custcompo/custcompo.component';
import { SegmentsModule } from './multiple-components/segments.module';

const routes: Routes = [
  {
    path:'segments/MyDemo',
    component:CustcompoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
