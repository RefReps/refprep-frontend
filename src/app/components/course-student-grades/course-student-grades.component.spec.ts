import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStudentGradesComponent } from './course-student-grades.component';

describe('CourseStudentGradesComponent', () => {
  let component: CourseStudentGradesComponent;
  let fixture: ComponentFixture<CourseStudentGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseStudentGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStudentGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
