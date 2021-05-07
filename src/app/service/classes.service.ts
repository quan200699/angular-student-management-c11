import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  classes: string[] = ['c02', 'c11'];

  constructor() {
  }

  getAllClass() {
    return this.classes;
  }
}
