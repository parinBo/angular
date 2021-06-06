import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { ListTasksComponent } from "./list-tasks/list-tasks.component";
import { MainComponent } from "./main.component";
import { OrderTasksComponent } from "./order-tasks/order-tasks.component";

@NgModule({
  imports:[RouterModule.forChild(
    [
      {path:'',component:MainComponent,children:[
        {path:'',component:ListTasksComponent},
        {path:'Order',component:OrderTasksComponent}
      ],canActivate:[AuthGuard]}
    ]
  )],
})
export class MainRoutingModule{}
