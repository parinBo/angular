import { Component, OnInit } from '@angular/core';
import {Task} from '../../shared/Task'
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {

  tasks :Task[]=[]
  constructor(private taskser:TaskService) { }
  ngOnInit(): void {
    this.taskser.getAllTasks()
    this.taskser.getAllTaskUpdate().subscribe(res=>{
      this.tasks = res
    })
  }

  onAdd(i:Task){
    if(i.limit<=0){

    }else{
      this.taskser.addTask(i)
    }
  }

  // async addIcon(task:Task[]){
  //   this.tasks = await task
  //   console.log(this.tasks)
  // }
}
