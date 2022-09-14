import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateService implements CanDeactivate<ContactComponent> {
canDeactivate(component:ContactComponent,currentroute:ActivatedRouteSnapshot,currentstate:RouterStateSnapshot,nextstate:RouterStateSnapshot)
{
return component.canexit()
}
  constructor() { }
}
