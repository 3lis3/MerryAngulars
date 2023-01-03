import { Injectable } from '@angular/core';

import { Task } from './task';


@Injectable()
export class TaskService {
    
    tasks: Array<Task>;
    
    constructor() {
        this.tasks = [new Task('Apple'), new Task('Orange'), new Task('Banana')];
    }
    

    getTasks() : Array<Task> {
        return this.tasks;
    }
    
    /*getCustomersSummary() : Observable<ICustomer[]> {
        return 
    }*/
    
    
    /*handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }*/
    
}