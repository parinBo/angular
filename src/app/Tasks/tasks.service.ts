import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Subject } from "rxjs";
@Injectable({
  providedIn:"root"
})
export class TaskService{
  limitSub= new Subject<number>()
  limit:number=0
  constructor(private db:AngularFirestore){

  }

  addTask(){
    this.limitSub.next(this.limit++)
  }

  getLimit(){
    return this.limitSub
  }


}
