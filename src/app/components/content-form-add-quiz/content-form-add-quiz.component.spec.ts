import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFormAddQuizComponent } from './content-form-add-quiz.component';

describe('ContentFormAddQuizComponent', () => {
  let component: ContentFormAddQuizComponent;
  let fixture: ComponentFixture<ContentFormAddQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFormAddQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFormAddQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
