import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  MatTableDataSource,
  MatPaginator
} from '@angular/material';
import {
  MatSort,
  MatSortable
} from '@angular/material';
import {
  Issue
} from '../../issue.model';
import {
  IssueService
} from '../../issue.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  searchkey: string;

  issues: Issue[];

  dataSource;
  //laenge;

  // map1; 

  displayedColumns = ['city', 'count', 'latitude', 'longitude', 'actions'];
  searchKey: string;



  constructor(private issueService: IssueService, private router: Router) {}

  ngOnInit() {
    this.fetchIssues();

  }

  fetchIssues() {

    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {

// FÜr Filter im Array wird filterPredicate benutzt     
        
      this.dataSource = new MatTableDataSource(data);
        this.dataSource.filterPredicate = (data, filter) => {
          const dataStr = data._id.city + data.count;
          return dataStr.toLocaleLowerCase().indexOf(filter) != -1;
        }

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.issues = this.dataSource;




        console.log('Data requested...');
        console.log(this.issues);

      });

  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter(this.searchKey);
  }

  applyFilter(filterValue: string) {

    //console.log( this.searchKey);
    this.dataSource.filter = filterValue;
    // this.searchKey.trim().toLocaleLowerCase();
  }

  /*editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }*/
  editIssue(id) {
    console.log(id);
 
    this.router.navigate([`/map/${id.lat}/${id.lng}`]);
  }




}
//AIzaSyCEjITXs6qtne3X_DNFOE0m54_o43iOi3Q