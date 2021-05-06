import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  listStudent: Student[] = [];
  currentIndex = -1;
  isShowed = false;

  constructor() {
  }

  ngOnInit() {
  }

  removeStudent(i: number) {
    this.listStudent.splice(i, 1);
  }

  showUpdateForm(i: number) {
    this.isShowed = !this.isShowed;
    this.currentIndex = i;
  }

  updateStudent(event) {
    this.listStudent[this.currentIndex] = event;
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
