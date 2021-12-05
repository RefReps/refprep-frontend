import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayModulesComponent } from './display-modules.component';

describe('DisplayModulesComponent', () => {
  let component: DisplayModulesComponent;
  let fixture: ComponentFixture<DisplayModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
