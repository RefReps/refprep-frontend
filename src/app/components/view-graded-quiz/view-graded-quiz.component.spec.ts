import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGradedQuizComponent } from './view-graded-quiz.component';

describe('ViewGradedQuizComponent', () => {
  let component: ViewGradedQuizComponent;
  let fixture: ComponentFixture<ViewGradedQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGradedQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGradedQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
