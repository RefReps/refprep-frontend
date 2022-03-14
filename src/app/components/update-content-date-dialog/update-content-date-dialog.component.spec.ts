import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContentDateDialogComponent } from './update-content-date-dialog.component';

describe('UpdateContentDateDialogComponent', () => {
  let component: UpdateContentDateDialogComponent;
  let fixture: ComponentFixture<UpdateContentDateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContentDateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContentDateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
