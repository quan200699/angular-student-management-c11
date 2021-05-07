import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student: Student = {};
  studentForm: FormGroup;
  index = -1;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.index = +paramMap.get('id');
      let student = this.getStudentByIndex(this.index);
      this.studentForm = new FormGroup({
        id: new FormControl(student.id, Validators.required),
        fullName: new FormControl(student.fullName),
        address: new FormControl(student.address),
        mark: new FormControl(student.mark)
      });
    });
  }

  get id() {
    return this.studentForm.get('id');
  }

  ngOnInit() {

  }

  getStudentByIndex(index: number) {
    let students = this.studentService.getAllStudent();
    return students[index];
  }

  updateStudentInfo(index) {
    let newStudent = this.studentForm.value;
    this.studentService.updateStudentInfo(index, newStudent);
  }
}
