import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '../components.module';

import { EditDisplaySectionsComponent } from './edit-display-sections.component';

describe('EditDisplaySectionsComponent', () => {
  let component: EditDisplaySectionsComponent;
  let fixture: ComponentFixture<EditDisplaySectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ComponentsModule,
        HttpClientTestingModule,
        RouterTestingModule ],
      declarations: [ EditDisplaySectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDisplaySectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
