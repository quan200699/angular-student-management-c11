import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../model/student';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  //Khai báo một đối tượng student để
  //nhận giá trị student cần chỉnh sửa
  //từ component cha
  @Input()
  student: Student = {};
  //Gửi dữ liệu student mới sang cho cha
  @Output()
  newStudent = new EventEmitter<Student>();
  studentForm: FormGroup;

  constructor() {
  }

  get id() {
    return this.studentForm.get('id');
  }

  ngOnInit() {
    this.studentForm = new FormGroup({
      id: new FormControl(this.student.id, Validators.required),
      fullName: new FormControl(this.student.fullName),
      address: new FormControl(this.student.address),
      mark: new FormControl(this.student.mark)
    });
  }

  updateStudentInfo() {
    this.newStudent.emit(this.studentForm.value);
    this.studentForm.reset();
  }
}
