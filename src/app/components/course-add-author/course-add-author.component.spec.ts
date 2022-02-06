import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddAuthorComponent } from './course-add-author.component';

describe('CourseAddAuthorComponent', () => {
  let component: CourseAddAuthorComponent;
  let fixture: ComponentFixture<CourseAddAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAddAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
