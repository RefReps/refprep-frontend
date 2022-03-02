import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContentDialogComponent } from './update-content-dialog.component';

describe('UpdateContentDialogComponent', () => {
  let component: UpdateContentDialogComponent;
  let fixture: ComponentFixture<UpdateContentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
