import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ServiceService } from './service.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:ServiceService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
