import { Component, OnInit } from '@angular/core';
import { TaskService } from './Tasks/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-angular';
  typesOfMenu=[
    {name:"Home",link:"/",icon:"home"},
    {name:"Tasks",link:"/Tasks",icon:"description"},
  ]
  limit:number =0
    constructor(private tasks:TaskService,){

  }
  ngOnInit(){
    this.tasks.getLimit().subscribe(data=>{
      this.limit=data
    })
  }
}
