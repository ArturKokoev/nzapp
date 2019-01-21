import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import  { Router } from '@angular/router';
import {IssueService } from '../../issue.service';
import {
  Issue
} from '../../issue.model';


@Component({
  selector: 'app-mapanalyse',
  templateUrl: './mapanalyse.component.html',
  styleUrls: ['./mapanalyse.component.css']
})
export class mapanalyseComponent implements OnInit {
issues: Issue[];
  mapanalyseForm: FormGroup;
 lat = -41.2864603;
lng =  174.776236;
date;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
   
  }
 

  ngOnInit() {
    this.issueService
    .getPostContent()
    .subscribe((data: Issue[]) => {

// FÜr Filter im Array wird filterPredicate benutzt     
      
  
      this.issues = data;

      

      console.log('Data requested...');
      console.log(this.issues);

    });
    console.log("mapanalyse");
  }

}
