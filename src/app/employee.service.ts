import { Injectable } from '@angular/core';

@Injectable()

export class empserv{
    emp_det = [
        {
          id: 1,
          name: 'vatsalya',
          dept: 'cse'
    
        },
        {
          id: 2,
          name: 'Prakar',
          dept: 'cse'
    
        },
        {
          id: 3,
          name: 'Arjun',
          dept: 'cse'
    
        }];

    getemp(){
        return this.emp_det;
    }
    empl = {
        id: 4,
        name: 'Raghav',
        dept:'cse'
    }
    setemp(){
        this.emp_det.push(this.empl)  
    }
}