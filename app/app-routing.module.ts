import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArraycrudComponent } from './arraycrud/arraycrud.component';
import { StudentsComponent } from './students/students.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"arraycrud",component:ArraycrudComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/add",component:AddStudentComponent},
  {path:"students/edit/:id",component:AddStudentComponent},
  {path:"students/:id",component:DetailStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
