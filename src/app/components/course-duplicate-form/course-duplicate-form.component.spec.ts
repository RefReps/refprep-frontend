import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDuplicateFormComponent } from './course-duplicate-form.component';

describe('CourseDuplicateFormComponent', () => {
  let component: CourseDuplicateFormComponent;
  let fixture: ComponentFixture<CourseDuplicateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDuplicateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDuplicateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
