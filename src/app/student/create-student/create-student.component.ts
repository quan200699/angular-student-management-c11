import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {NgForm} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {ClassesService} from '../../service/classes.service';
import {Classes} from '../../model/classes';

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
  listClass: Classes[] = [];

  constructor(private studentService: StudentService,
              private classesService: ClassesService) {
  }

  ngOnInit() {
    this.getAllClass();
  }

  getAllClass() {
    this.classesService.getAllClasses().subscribe(classes => {
      this.listClass = classes;
    });
  }

  addNewStudent(form: NgForm) {
    let newStudent = form.value;
    newStudent.classes = {
      id: newStudent.classes
    };
    this.studentService.createNewStudent(newStudent).subscribe(() => {
      console.log('Tao thanh cong');
      this.student = {};
    }, e => {
      console.log(e);
    });
  }
}
