import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuizQuestionComponent } from './edit-quiz-question.component';

describe('EditQuizQuestionComponent', () => {
  let component: EditQuizQuestionComponent;
  let fixture: ComponentFixture<EditQuizQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuizQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
