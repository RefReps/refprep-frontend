import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySectionsComponent } from './display-sections.component';

describe('DisplaySectionsComponent', () => {
  let component: DisplaySectionsComponent;
  let fixture: ComponentFixture<DisplaySectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
