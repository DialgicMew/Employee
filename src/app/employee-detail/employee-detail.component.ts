import { Component, OnInit } from '@angular/core';
import { empserv } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private emp: empserv) { }
  emp_det=[];

  ngOnInit() {
    this.emp_det = this.emp.getemp();
  }
  

}
