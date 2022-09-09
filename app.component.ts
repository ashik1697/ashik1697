import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
  fromsub=null;

  constructor(private service:ServiceService){

    this.service.sub.subscribe(x=>{console.log("from sub app",x)
    this.fromsub=x;
    console.log(this.fromsub);
  })
   
    const observable = new Observable((subscriber) => {
      console.log('a');
      console.log('hi');
      // setTimeout(() => subscriber.next('1'), 4000);
      // setTimeout(() => subscriber.next('2'), 8000);
      // setTimeout(() => subscriber.next('3'), 12000);
      // setTimeout(() => subscriber.next('4'), 16000);
      // setTimeout(() => subscriber.next('5'), 20000);

      subscriber.next('1');
      subscriber.next('2');
      subscriber.next('3');
      subscriber.next('4');
      subscriber.next('5');
      console.log('bye');
    });
    observable.subscribe((x) => {
      console.log(x);
    });
    observable.subscribe((y)=>{
      console.log(y);
    });
  }
}


var sub:Subject<any>=new Subject()
sub.subscribe(x=>console.log('from app sub',x));
sub.next('a');
sub.subscribe(x=>console.log('from app sub',x));
sub.next('b');
sub.subscribe(x=>console.log('from app sub',x));
sub.next('c');

