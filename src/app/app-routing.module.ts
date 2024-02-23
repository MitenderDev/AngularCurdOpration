import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
   { path:"",redirectTo:'Home',pathMatch:'full'},
  { path:"Home",component:HomeComponent},
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'ViewEmployee/:employeeId', component: ViewEmployeeComponent },  
  { path: 'EditEmployee/:employeeId', component: EditEmployeeComponent },

  // {path:"employee",component:EmployeeComponent,
  //   children:[
  //     {path:"employee1",component:Employee1Component}
  //   ]
  // },
//{path:"login",loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)}
{path:"**",component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
