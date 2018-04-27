import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserloginComponent} from './userlogin/userlogin.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import { ReportDetailsComponent } from './report-details/report-details.component';

const routes: Routes = [
  {
    path : '',
    component: UserloginComponent
  },
  {
    path : 'adminlog',
    component : AdminloginComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
