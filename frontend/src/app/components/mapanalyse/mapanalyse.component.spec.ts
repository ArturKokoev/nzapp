import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mapanalyseComponent } from './mapanalyse.component';

describe('mapanalyseComponent', () => {
  let component: mapanalyseComponent;
  let fixture: ComponentFixture<mapanalyseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mapanalyseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mapanalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should mapanalyse', () => {
    expect(component).toBeTruthy();
  });
});
