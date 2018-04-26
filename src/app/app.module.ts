import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { BloodListComponent } from './blood-list/blood-list.component';
import { ActionComponent } from './action/action.component';


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    AdminloginComponent,
    ReportDetailsComponent,
    BloodListComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
