import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDeleteFormComponent } from './module-delete-form.component';

describe('ModuleDeleteFormComponent', () => {
  let component: ModuleDeleteFormComponent;
  let fixture: ComponentFixture<ModuleDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleDeleteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
