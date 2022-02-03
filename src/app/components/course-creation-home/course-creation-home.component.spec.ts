import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCreationHomeComponent } from './course-creation-home.component';

describe('CourseCreationHomeComponent', () => {
  let component: CourseCreationHomeComponent;
  let fixture: ComponentFixture<CourseCreationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCreationHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCreationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
