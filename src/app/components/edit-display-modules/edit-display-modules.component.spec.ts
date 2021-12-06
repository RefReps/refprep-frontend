import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisplayModulesComponent } from './edit-display-modules.component';

describe('EditDisplayModulesComponent', () => {
  let component: EditDisplayModulesComponent;
  let fixture: ComponentFixture<EditDisplayModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDisplayModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDisplayModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
