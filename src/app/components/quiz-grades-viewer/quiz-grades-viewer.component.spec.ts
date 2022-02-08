import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGradesViewerComponent } from './quiz-grades-viewer.component';

describe('QuizGradesViewerComponent', () => {
  let component: QuizGradesViewerComponent;
  let fixture: ComponentFixture<QuizGradesViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizGradesViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizGradesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
