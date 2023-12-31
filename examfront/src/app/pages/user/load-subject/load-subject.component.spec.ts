import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSubjectComponent } from './load-subject.component';

describe('LoadSubjectComponent', () => {
  let component: LoadSubjectComponent;
  let fixture: ComponentFixture<LoadSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadSubjectComponent]
    });
    fixture = TestBed.createComponent(LoadSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
