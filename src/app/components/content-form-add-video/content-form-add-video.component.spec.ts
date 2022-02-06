import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentsModule } from '../components.module';

import { ContentFormAddVideoComponent } from './content-form-add-video.component';

describe('ContentFormAddVideoComponent', () => {
  let component: ContentFormAddVideoComponent;
  let fixture: ComponentFixture<ContentFormAddVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ComponentsModule,
        HttpClientTestingModule,
        MatDialogModule ],
      declarations: [ ContentFormAddVideoComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }]
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
