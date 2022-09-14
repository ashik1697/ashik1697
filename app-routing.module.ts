import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceService } from 'src/service.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
path:' ',
component:HomeComponent

  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
  path:'About',
  component:AboutComponent
  },
  {
    path:'Contact',
    component:ContactComponent,canActivate:[ServiceService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
