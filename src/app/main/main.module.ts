import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { MatertialModule } from '../material.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    ListTasksComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatertialModule,
  ],
})
export class MainModule { }
