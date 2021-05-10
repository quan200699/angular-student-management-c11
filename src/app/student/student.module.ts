import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import {StudentListComponent} from "./student-list/student-list.component";
import {SearchStudentComponent} from "./search-student/search-student.component";
import {CreateStudentComponent} from "./create-student/create-student.component";
import {UpdateStudentComponent} from "./update-student/update-student.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    StudentListComponent,
    SearchStudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
