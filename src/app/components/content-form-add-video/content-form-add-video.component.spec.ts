import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFormAddVideoComponent } from './content-form-add-video.component';

describe('ContentFormAddVideoComponent', () => {
  let component: ContentFormAddVideoComponent;
  let fixture: ComponentFixture<ContentFormAddVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFormAddVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFormAddVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
