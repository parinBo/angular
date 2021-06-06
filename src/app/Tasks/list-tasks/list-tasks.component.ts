import { Component, OnInit } from '@angular/core';
import {  NgForm,  } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { Task } from '../task';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  task:Task[]=[
    {name:"ตักน้ำแข็ง (2ถุง)",id:"icebag-1",rate:10,limit:1,icon:""},
        {name:"ตักน้ำแข็ง (3กระติก)",id:"icebox-1",rate:5,limit:1,icon:""},
        {name:"กวาดบ้าน",id:"sweep-2",rate:5,limit:2,icon:""},
        {name:"ถูบ้าน",id:"mopping-2",rate:5,limit:2,icon:""},
        {name:"ตากผ้า",id:"shirt-1",rate:10,limit:1,icon:""},
        {name:"อ่านหนังสือ/ทำแบบฝึกหัด",id:"int-1",rate:30,limit:1,icon:""},
        {name:"เตรียม/เก็บโต๊ะกินข้าว",id:"prepare-2",rate:10,limit:2,icon:""},
        {name:"เช็ดโต๊ะกินข้าว",id:"cleantable-2",rate:5,limit:2,icon:""},
        {name:"ขายของ (วัน)",id:"sell-1",rate:15,limit:1,icon:""},
        {name:"ให้อาหารหมา",id:"feed-2",rate:5,limit:2,icon:""},
        {name:"ล้างจาน",id:"cleandish-2",rate:10,limit:2,icon:""},
        {name:"แช่ของ",id:"fillshelf-2",rate:5,limit:2,icon:""},
        {name:"ปิดบ้าน",id:"closehome-1",rate:5,limit:1,icon:""},
        {name:"ทิ้งขยะ ",id:"garbage-3",rate:10,limit:3,icon:""},
        {name:"ช่วยแม่ทำงาน (วัน)",id:"helpmom-1",rate:15,limit:1,icon:""},
  ]
  constructor(private db:AngularFirestore,private taskser:TaskService) { }
  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value)
    this.db.collection("Tasks").doc().set({test:"123",data:"tasdsaf",hello:{test:"data",tick:"what"}})
  }
  onAdd(i:Task){
    this.taskser.addTask()
    console.log(i)
  }
}
