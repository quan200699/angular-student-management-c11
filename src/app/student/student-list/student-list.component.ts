import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  listStudent: Student[] = [];

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.studentService.getAllStudent().subscribe(students => {
      this.listStudent = students;
    });
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
}
