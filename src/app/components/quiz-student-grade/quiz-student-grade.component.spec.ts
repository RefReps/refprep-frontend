import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizStudentGradeComponent } from './quiz-student-grade.component';

describe('QuizStudentGradeComponent', () => {
  let component: QuizStudentGradeComponent;
  let fixture: ComponentFixture<QuizStudentGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizStudentGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizStudentGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
