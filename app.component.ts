import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{map} from 'rxjs/operators';
import { Employee } from 'src/employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentId:any;
  employeeform:any;
 employeedetails:Employee[]=[];
 form!: FormGroup;
 editmode:boolean=false
 
  
    
  private _backend: string = 'https://employee-management-syst-c2881-default-rtdb.firebaseio.com/employee.json';
  public get backend(): string {
    return this._backend;
  }
  public set backend(value: string) {
    this._backend = value;
  }
  title: any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.get()
    this.employeeform = new FormGroup({
      name: new FormControl(""),
      Id: new FormControl(0),
      email: new FormControl(""),
      Phonenumber: new FormControl(0),
      Position: new FormControl(""),
    });
  }
  onsave(employee:{name:string,Id:number,email:string,Phonenumber:number,Position:string})
  {
    if(!this.editmode)
    {
    this.http.post(this.backend,employee).subscribe((data)=>{

    });
  }
    else
    {
      this.update(this.currentId,employee)
    }
  }
  get()
  {
    this.http.get(this.backend)
    .pipe(map((data)=>{
      const employees=[];
      for(let key in data)
      {
        if(data.hasOwnProperty(key))
        {
          employees.push({...data[key],Id:key});
          console.log("g",employees)
        }

      }
      return employees
    }))
    
    .subscribe((employees)=>{
      console.log(employees);
      this.employeedetails=employees;
  })
  }
  ondelete(Id:number)
  {
this.http.delete('https://employee-management-syst-c2881-default-rtdb.firebaseio.com/employee/'+Id+'.json')
.subscribe();
  }
  onedit(Id:any)
  {
let emp=this.employeedetails.find((p)=>{return p.Id===Id});
this.currentId=Id;
console.log("p",emp)
this.employeeform.patchValue(
  emp
)
this.editmode=true
  }
 update(Id:number,value:Employee)
  {
this.http.put('https://employee-management-syst-c2881-default-rtdb.firebaseio.com/employee/'+Id+'.json',value).subscribe()
  }
}
