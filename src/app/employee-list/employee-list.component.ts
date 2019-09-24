import { Component, OnInit } from '@angular/core';
import { empserv } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private emp:empserv) { }

  ngOnInit() {
    this.emp_det = this.emp.getemp();
  }
  emp_det= []
  
}
