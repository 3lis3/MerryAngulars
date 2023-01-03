import { Component } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/taskService.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {

  
  public tasks: Array<Task> = [];

  
  constructor(private taskService: TaskService) { 
     this.tasks = taskService.getDoneTasks(); 
   }

 

  public toggle(task: Task):void{
    console.dir(event);
    task.toggle();
  }
}
