import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../model/student';
import { NgForm} from '@angular/forms';

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

  //Để truyền dữ liệu sang component cha
  @Output()
  studentBinding = new EventEmitter<Student>();

  constructor() {
  }

  ngOnInit() {
  }

  //Phương thức để lấy giá trị của form và gán vào biến studentBinding
  // và gửi sang component cha
  addNewStudent(form: NgForm) {
    let newStudent = form.value;
    this.studentBinding.emit(newStudent);
    this.student = {};
  }
}
