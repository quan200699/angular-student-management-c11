import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Classes} from '../model/classes';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  constructor(private http: HttpClient) {
  }

  getAllClasses(): Observable<Classes[]> {
    return this.http.get<Classes[]>(`${API_URL}/classes`);
  }

}
