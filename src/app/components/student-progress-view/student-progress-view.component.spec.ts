import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProgressViewComponent } from './student-progress-view.component';

describe('StudentProgressViewComponent', () => {
  let component: StudentProgressViewComponent;
  let fixture: ComponentFixture<StudentProgressViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProgressViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProgressViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
