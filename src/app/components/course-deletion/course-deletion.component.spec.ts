import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDeletionComponent } from './course-deletion.component';

describe('CourseDeletionComponent', () => {
  let component: CourseDeletionComponent;
  let fixture: ComponentFixture<CourseDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDeletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
