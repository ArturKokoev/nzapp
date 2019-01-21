import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = '';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getPostContent() {
    return this.http.get(`${this.uri}/postcontent`);
  }

  addIssue(post_meta){
    const issue = {
      post_meta: post_meta
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, post_meta){
    const issue = {
      post_meta: post_meta
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
