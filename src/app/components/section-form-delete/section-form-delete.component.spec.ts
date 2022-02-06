import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { string } from 'joi';
import { ComponentsModule } from '../components.module';

import { SectionFormDeleteComponent } from './section-form-delete.component';

describe('SectionFormDeleteComponent', () => {
  let component: SectionFormDeleteComponent;
  let fixture: ComponentFixture<SectionFormDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ComponentsModule,
        HttpClientTestingModule,
        MatDialogModule ],
      providers: [{
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }],
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
