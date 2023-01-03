import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

import { Task } from './task';


@Injectable()
export class TaskService {
    add(content: string) {
        this.tasks.push(new Task(content));
    }
    
    tasks: Array<Task>;

    
    constructor() {
        let a = new Task('Apple')
        a.toggle();
        let b = new Task('Orange')
        //b.toggle();
        let c = new Task('Banana')
        c.toggle();


        this.tasks = [a, b, c];
    }
    

    getTasks() : Array<Task> {
        return this.tasks;
    }

    getDoneTasks() : Array<Task> {
        return this.tasks.filter(elem => elem.getStatus() === true);
    }
    
    /*getCustomersSummary() : Observable<ICustomer[]> {
        return 
    }*/
    
    
    /*handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }*/
    
}