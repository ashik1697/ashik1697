import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employeeform:any
  emp: any;
  employee: any = [{
    name: "",
    Id: 0,
    email: "",
    Phonenumber: 0,
    Position: ""
  }];



  constructor(private empserv: EmployeeService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.employee = this.empserv.onGet()

  }


  ondelete(index:any) {
    this.empserv.ondelete(index);
  }
  edit(i: any, data: any) {
this.empserv.index=data;
this.router.navigate(['edit',data])
console.log(i);

  }


  }


