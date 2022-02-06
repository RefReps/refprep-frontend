import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentsModule } from '../components.module';

import { ContentFormAddQuizComponent } from './content-form-add-quiz.component';

describe('ContentFormAddQuizComponent', () => {
  let component: ContentFormAddQuizComponent;
  let fixture: ComponentFixture<ContentFormAddQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ComponentsModule,
        MatDialogModule,
        HttpClientTestingModule ],
      declarations: [ ContentFormAddQuizComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFormAddQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
