import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseQuizEditComponent } from './course-quiz-edit.component';

describe('CourseQuizEditComponent', () => {
  let component: CourseQuizEditComponent;
  let fixture: ComponentFixture<CourseQuizEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseQuizEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseQuizEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
