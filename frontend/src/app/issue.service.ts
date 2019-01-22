import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  url = 'https://murmuring-coast-49829.herokuapp.com';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.url}/issues`);
  }

  getPostContent() {
    return this.http.get(`${this.url}/postcontent`);
  }

 
}
