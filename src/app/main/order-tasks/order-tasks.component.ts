import { Component, OnInit } from '@angular/core';
import {Task} from '../../shared/Task'
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-order-tasks',
  templateUrl: './order-tasks.component.html',
  styleUrls: ['./order-tasks.component.css']
})
export class OrderTasksComponent implements OnInit {
  tasks:Task[]=[]
  rate:number=0
  constructor(private taskSer:TaskService) {
    taskSer.getTask()
    taskSer.getTaskUpdated().subscribe(res=>{
      this.tasks=res
    })
    taskSer.getRateUpdate().subscribe(res=>{
      this.rate=res
    })
   }

  ngOnInit(): void {

  }

  onRemove(task:Task){
    this.taskSer.deleteTask(task)
  }

}
