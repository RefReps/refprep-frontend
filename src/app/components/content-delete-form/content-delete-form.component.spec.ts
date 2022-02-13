import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDeleteFormComponent } from './content-delete-form.component';

describe('ContentDeleteFormComponent', () => {
  let component: ContentDeleteFormComponent;
  let fixture: ComponentFixture<ContentDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDeleteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
