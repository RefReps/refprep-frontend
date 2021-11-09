import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCurriculumHomeComponent } from './edit-curriculum-home.component';

describe('EditCurriculumHomeComponent', () => {
  let component: EditCurriculumHomeComponent;
  let fixture: ComponentFixture<EditCurriculumHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCurriculumHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCurriculumHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
