import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  listStudent: Student[] = [];
  studentUpdate: Student = {};
  isShowUpdateForm = false;
  currentIndex = -1;
  listClass: string[] = ['C02H1', 'C11G1'];

  constructor() {
  }

  ngOnInit() {
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

  findStudentByName(value) {
    let students = [];
    for (let i = 0; i < this.listStudent.length; i++) {
      if (this.listStudent[i].fullName.includes(value)) {
        students.push(this.listStudent[i]);
      }
    }
    this.listStudent = students;
  }

  addNewStudentToList(event) {
    this.listStudent.push(event)
  }
}
