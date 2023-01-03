import { Component, Inject } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/taskService.service';

@Component({
  selector: 'app-open', 
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent {

  public tasks: Array<Task> = [];

  
  constructor(private taskService: TaskService) { 
     this.tasks = taskService.getTasks(); 
   }

  public add(content: string):void{
    //console.dir(event);
    this.taskService.add(content);
  }

  public toggle(task: Task):void{
    console.dir(event);
    task.toggle();
  }


}



