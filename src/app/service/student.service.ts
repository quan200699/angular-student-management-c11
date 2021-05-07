import {Injectable} from '@angular/core';
import {Student} from '../model/student';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(`${API_URL}/students`);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${API_URL}/students/${id}`);
  }

  createNewStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${API_URL}/students`, student);
  }

  updateStudentInfo(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${API_URL}/students/${id}`, student);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`${API_URL}/students/${id}`);
  }
}
