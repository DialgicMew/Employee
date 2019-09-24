import { Component } from '@angular/core';
import { empserv } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emp: empserv){}
  addemp(){
    return this.emp.setemp();
  }
}
