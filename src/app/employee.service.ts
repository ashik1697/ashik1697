import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  Id:any
  x:any
  index:any
  select:any;
  employeeform: any
  data: any
  employees: Employee[] = [

  ];
 

  constructor() { }
  onGet() {
    return this.employees;
  }
  onAdd(employee: Employee) {
    this.employees.push(employee);
  }
  ondelete(index: any) {
    this.employees.splice(index, 1);
  }
  onupdate(data: any, index: any) {
this.employees.splice(index,1,data);
console.log(this.x);
}
}
