import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstname:string='';
  lastname:string='';

  constructor() { }

  ngOnInit(): void {
  }
  canexit()
  {
    if(this.firstname || this.lastname)
    {
       return confirm('You have unsaved changes,Do you want to discard the change ?')
    }
    else
    {
      return true
    }

  }

}
