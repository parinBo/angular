import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { User } from "../shared/user";

@Injectable({providedIn:'root'})
export class UserService{
  user:any
  constructor(public auth:AngularFireAuth,public afs:AngularFirestore,public router:Router){
    auth.authState.subscribe(userData=>{
      if (userData) {
        this.afs.doc(`users/${userData.uid}`).get().subscribe(data=>{
          localStorage.setItem('user', JSON.stringify(data.data()));
        })
      } else {
        localStorage.setItem('user', "");
      }
    })
  }

  async register(email:string,password:string,name:string){
    this.auth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.router.navigate(['/'])
      this.SetUserData(res.user,name)
    }).catch(err=>{
    })


  }

  async login(email:string,pass:string){
      const result = await this.auth.signInWithEmailAndPassword(email,pass)
      .then(res=>{
        this.router.navigate(['/'])
      })
      .catch(err=>{
        console.log(err.message)
      })
  }

  async logout(){
    this.auth.signOut();
    this.router.navigate(['/login'])
  }

  isLoggedIn(): boolean {
    const user =localStorage.getItem('user')
    return (user !== "") ? true : false;
  }

  SetUserData(user:any,name:any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: name,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }


}
