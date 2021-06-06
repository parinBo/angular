import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data = JSON.parse(localStorage.getItem("user")!)
  typesOfMenu=[
    {name:"Home",link:"/",icon:"home"},
    {name:"Tasks",link:"/Order",icon:"description"},
  ]
  limit:number=0
  constructor(private tasks:TaskService,private user:UserService){}
  ngOnInit(){
    this.tasks.getTask()
    this.tasks.getorderUpdate().subscribe(data=>{
      this.limit = data
    })
  }

  logout(){
    this.user.logout()
  }

}
