import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.url}/issues`);
  }

  getPostContent() {
    return this.http.get(`${this.url}/postcontent`);
  }

 
}
