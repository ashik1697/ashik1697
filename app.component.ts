import { Component } from '@angular/core';
import { AuthService } from 'src/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authguard';
  constructor(private auth:AuthService){}


  login()
  {
this.auth.login()
  }
  logout()
  {
    this.auth.logout()
  }
}
