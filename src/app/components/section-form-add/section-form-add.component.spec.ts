import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Section } from 'src/app/models/course';
import { ComponentsModule } from '../components.module';

import { SectionFormAddComponent } from './section-form-add.component';

describe('SectionFormAddComponent', () => {
  let component: SectionFormAddComponent;
  let fixture: ComponentFixture<SectionFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ComponentsModule,
        HttpClientTestingModule,
        MatDialogModule,
         ],
      declarations: [ SectionFormAddComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }]
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
