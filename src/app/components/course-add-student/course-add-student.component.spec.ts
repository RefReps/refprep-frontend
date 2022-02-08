import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddStudentComponent } from './course-add-student.component';

describe('CourseAddStudentComponent', () => {
  let component: CourseAddStudentComponent;
  let fixture: ComponentFixture<CourseAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAddStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
