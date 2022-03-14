import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCourseByCodeComponent } from './join-course-by-code.component';

describe('JoinCourseByCodeComponent', () => {
  let component: JoinCourseByCodeComponent;
  let fixture: ComponentFixture<JoinCourseByCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinCourseByCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinCourseByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
