import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {IssueService } from '../../issue.service';
import {Issue} from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  lat;
  lng;

  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {

  }

  onChoseLocation(event){
    console.log(event);
  }



  ngOnInit() {
    console.log("EDIT");
    this.route.params.subscribe(params => {

      this.lat = params["id.lat"];
      this.lat =  parseFloat(this.lat);

      this.lng = params["id.lng"];
      this.lng = parseFloat(this.lng);
     
      });
    
  }
 
  selectCoordinates(){

  }
  

}
