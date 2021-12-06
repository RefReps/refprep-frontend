import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisplaySectionsComponent } from './edit-display-sections.component';

describe('EditDisplaySectionsComponent', () => {
  let component: EditDisplaySectionsComponent;
  let fixture: ComponentFixture<EditDisplaySectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
