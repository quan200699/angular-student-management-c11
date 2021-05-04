import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  listStudent: Student[] = [];
  student: Student = {
    classes: ''
  };
  studentUpdate: Student = {};
  isShowCreateForm = false;
  isShowUpdateForm = false;
  currentIndex = -1;
  listClass: string[] = ['C02H1', 'C11G1'];

  constructor() {
  }

  ngOnInit() {
  }

  addNewStudent() {
    this.listStudent.push(this.student);
    this.student = {};
  }

  openForm() {
    this.isShowCreateForm = !this.isShowCreateForm;
  }

  removeStudent(i: number) {
    this.listStudent.splice(i, 1);
  }

  showUpdateForm(i: number) {
    this.currentIndex = i;
    this.isShowUpdateForm = !this.isShowUpdateForm;
    this.studentUpdate = {
      id: this.listStudent[i].id,
      fullName: this.listStudent[i].fullName,
      mark: this.listStudent[i].mark,
      address: this.listStudent[i].address
    };
  }

  updateStudent(index) {
    this.listStudent[this.currentIndex] = this.studentUpdate;
    this.studentUpdate = {};
  }
}
