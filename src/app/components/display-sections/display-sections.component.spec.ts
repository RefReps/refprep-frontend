import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '../components.module';

import { DisplaySectionsComponent } from './display-sections.component';

describe('DisplaySectionsComponent', () => {
  let component: DisplaySectionsComponent;
  let fixture: ComponentFixture<DisplaySectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ComponentsModule,
        HttpClientTestingModule,
        RouterTestingModule ],
      declarations: [ DisplaySectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
