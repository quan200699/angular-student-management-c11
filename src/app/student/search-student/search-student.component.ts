import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {
  @Output()
  s = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  search(value: string) {
    this.s.emit(value);
  }
}
