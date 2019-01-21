import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

import{ AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { mapanalyseComponent } from './components/mapanalyse/mapanalyse.component';
import { EditComponent } from './components/edit/edit.component';
import { from } from 'rxjs';

import {IssueService } from './issue.service';

const routes: Routes = [
  { path: 'mapanalyse', component: mapanalyseComponent},
  {path: 'map/:id.lat/:id.lng', component: EditComponent},
  {path: 'list', component: ListComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    mapanalyseComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMDVQEmd7Nk78bB_YkKICnlJyXxWvlfFo'
    }),
    AgmJsMarkerClustererModule,
    MatToolbarModule, 
   MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule,
   MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
