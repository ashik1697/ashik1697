import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CandeactivateService } from './candeactivate.service';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'About',
    component:AboutComponent
  },
  {
    path:'Contact',canDeactivate:[ CandeactivateService],
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
