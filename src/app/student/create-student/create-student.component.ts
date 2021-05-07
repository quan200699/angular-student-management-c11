import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../model/student';
import { NgForm} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {ClassesService} from '../../service/classes.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  //Khai báo một đối tượng student
  student: Student = {
    classes: ''
  };
  listClass: string[] = [];

  constructor(private studentService: StudentService,
              private classesService: ClassesService) {
  }

  ngOnInit() {
    this.getAllClass();
  }

  getAllClass(){
    this.listClass = this.classesService.getAllClass();
  }

  addNewStudent(form: NgForm) {
    let newStudent = form.value;
    this.studentService.createNewStudent(newStudent);
    this.student = {};
  }
}
