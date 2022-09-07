import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  {
    path: "add",
    component: RegisterComponent
  },
  {
    path: "edit/:id",
    component: RegisterComponent
  },
  {
    path: "list",
    component: ListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
