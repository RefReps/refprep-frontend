import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportStudentsCsvComponent } from './import-students-csv.component';

describe('ImportStudentsCsvComponent', () => {
  let component: ImportStudentsCsvComponent;
  let fixture: ComponentFixture<ImportStudentsCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportStudentsCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportStudentsCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
