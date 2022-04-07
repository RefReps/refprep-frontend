import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFormAddTextComponent } from './content-form-add-text.component';

describe('ContentFormAddTextComponent', () => {
  let component: ContentFormAddTextComponent;
  let fixture: ComponentFixture<ContentFormAddTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFormAddTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFormAddTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
