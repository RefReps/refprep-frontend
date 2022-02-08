import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizStudentViewComponent } from './quiz-student-view.component';

describe('QuizStudentViewComponent', () => {
  let component: QuizStudentViewComponent;
  let fixture: ComponentFixture<QuizStudentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizStudentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizStudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
