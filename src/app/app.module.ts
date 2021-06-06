import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MatertialModule } from './material.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { OrderTasksComponent } from './main/order-tasks/order-tasks.component';
import { AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent,
    OrderTasksComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,MatertialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule,AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
