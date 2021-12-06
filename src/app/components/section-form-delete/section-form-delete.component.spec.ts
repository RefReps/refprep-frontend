import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFormDeleteComponent } from './section-form-delete.component';

describe('SectionFormDeleteComponent', () => {
  let component: SectionFormDeleteComponent;
  let fixture: ComponentFixture<SectionFormDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFormDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
