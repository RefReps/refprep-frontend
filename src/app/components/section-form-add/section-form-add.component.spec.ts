import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFormAddComponent } from './section-form-add.component';

describe('SectionFormAddComponent', () => {
  let component: SectionFormAddComponent;
  let fixture: ComponentFixture<SectionFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFormAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
