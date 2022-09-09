import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {


  constructor(private service:ServiceService) { 
    this.service.sub.subscribe(x=>{console.log("from component2 app",x)
    console.log("m",x)
  });
  }

  ngOnInit(): void {}
  emit()
  {
    this.service.senddata(Math.random());
  }

}
