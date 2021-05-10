import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {CreateStudentComponent} from "./create-student/create-student.component";
import {UpdateStudentComponent} from "./update-student/update-student.component";


const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path: 'create',
    component: CreateStudentComponent
  },
  {
    path: 'edit/:id',
    component: UpdateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
