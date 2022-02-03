import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAddTabSelectComponent } from './content-add-tab-select.component';

describe('ContentAddTabSelectComponent', () => {
  let component: ContentAddTabSelectComponent;
  let fixture: ComponentFixture<ContentAddTabSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAddTabSelectComponent ]
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
