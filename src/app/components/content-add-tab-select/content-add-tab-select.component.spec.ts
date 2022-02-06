import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../components.module';

import { ContentAddTabSelectComponent } from './content-add-tab-select.component';

describe('ContentAddTabSelectComponent', () => {
  let component: ContentAddTabSelectComponent;
  let fixture: ComponentFixture<ContentAddTabSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ComponentsModule,
        SharedModule,
        HttpClientTestingModule,
        MatDialogModule ],
      declarations: [ ContentAddTabSelectComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAddTabSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
