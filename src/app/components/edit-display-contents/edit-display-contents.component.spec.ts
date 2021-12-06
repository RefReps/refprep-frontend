import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisplayContentsComponent } from './edit-display-contents.component';

describe('EditDisplayContentsComponent', () => {
  let component: EditDisplayContentsComponent;
  let fixture: ComponentFixture<EditDisplayContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDisplayContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDisplayContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
