import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Subject } from "rxjs";
import { Task } from "../shared/Task";
import { User } from "../shared/user";
import { map } from "rxjs/operators";
@Injectable({
  providedIn:"root"
})
export class TaskService{
  tasks:Task[]=[
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
  private rate:number=0
  private rateSub = new Subject<number>()
  private orderSub = new Subject<number>()
  user:User = JSON.parse(localStorage.getItem('user')!)
  private allTasksCollections:any
  private tasksCollections:any
  private taskAllUpdated = new Subject<Task[]>()
  private taskUpdated = new Subject<Task[]>()
  private t: Task[] = [];
  constructor(private afs:AngularFirestore){
    this.allTasksCollections = afs.doc(`Task/${this.user.uid}`).collection("allData")
    this.tasksCollections = afs.doc(`Task/${this.user.uid}`).collection("data")
  }

  // addTask(){
  //   this.limit++
  //   this.limitSub.next(this.limit)
  // }



  getAllTasks(){
    var allTask = this.allTasksCollections as AngularFirestoreCollection<Task>
    allTask.snapshotChanges().subscribe(data=>{
      if(data.length==0){
        this.tasks.map(data=>{
          this.allTasksCollections.doc(data.id).set(data)
        })
      }
    else{
      allTask.valueChanges().pipe(map(data=>{
            return data.map(task=>{
                return task
            })
        })).subscribe(res=>{
          this.taskAllUpdated.next(res)
        })
    }
    })
  }
  getAllTaskUpdate(){
    return this.taskAllUpdated
  }
  getRateUpdate(){
    return this.rateSub
  }

  getorderUpdate(){
    return this.orderSub
  }

  getTask(){
    var task = this.tasksCollections as AngularFirestoreCollection<Task>
    task.valueChanges().pipe(map(data=>{
      this.rate=0
      return data.map(t=>{
        this.rate += t.rate
        return t
      })
    })).subscribe(res=>{
      this.rateSub.next(this.rate)
      this.taskUpdated.next(res)
      this.orderSub.next(res.length)
    })
  }
  getTaskUpdated(){
    return this.taskUpdated
  }

  changeAllTask(task:Task){
    let oldId = task.id
    let id = task.id.substr(0,task.id.indexOf("-"))
    task.id=`${id}-${task.limit}`
    this.allTasksCollections.doc(oldId).delete()
    this.allTasksCollections.doc(task.id).set({name:task.name,id:task.id,limit:task.limit,rate:task.rate,icon:""})
  }

  addTask(task:Task){
    this.tasksCollections.doc(task.id).set(task)
    task.limit--;
    this.changeAllTask(task)
}
  async deleteTask(task:Task){
    var allTask = this.allTasksCollections as AngularFirestoreCollection<Task>
    await allTask.valueChanges().pipe(map(data=>{
        return data.find(d=>d.name==task.name)
    })).subscribe(data=>{
        data!.limit++;
        this.changeAllTask(data!)

    })
    await this.tasksCollections.doc(task.id).delete()
}



}
