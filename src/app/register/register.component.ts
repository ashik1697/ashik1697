import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employeeform: any = "";
  i: any
  data: any;
  header: any;
  employee: any = {
    name: "",
    Id: 0,
    email: "",
    Phonenumber: 0,
    Position: ""
  }
  ID: any;
  index:any
editIndex!:number;
employeeList:any = [];
  constructor(private router: Router, private route: ActivatedRoute, private empserv: EmployeeService) { }

  ngOnInit(): void {
    this.employeeform = new FormGroup({
      name: new FormControl(""),
      Id: new FormControl(0),
      email: new FormControl(""),
      Phonenumber: new FormControl(0),
      Position: new FormControl(""),
    });
this.employeeList = this.empserv.employees;

    this.data=(this.route.snapshot.params['id']);
    if(this.data >= 0){
      this.employeeform.patchValue(
        this.employeeList[this.data]
        )
       
    }
  
      
  }
  OnSubmit(employeeform: any) {
   
    if(this.data >=0){
      this.empserv.onupdate(employeeform.value,this.data);
    }else {
      this.empserv.onAdd(employeeform.value);
    }
    console.log("c",this.data);
    
    this.router.navigateByUrl("");
  }
  
}




