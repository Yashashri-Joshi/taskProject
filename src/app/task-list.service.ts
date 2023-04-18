import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private apiURL = "https://jsonplaceholder.typicode.com/todos"; // API URL

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(public http: HttpClient) { }

  public getUserResponse() {
    return this.http.get(this.apiURL);
  }


}

