import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
sub:Subject<number>;
  constructor() {
    this.sub=new Subject<number>();
   }
   senddata(data:number)
    {
        this.sub.next(data)
        
    }
}
