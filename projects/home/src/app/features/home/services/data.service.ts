import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mockDataUrl = `assets/mock/api/v1/json-file/data.json`;

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.mockDataUrl);
  }

}