import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsModule } from '../components.module';

import { DialogCreateCourseComponent } from './dialog-create-course.component';

describe('DialogCreateCourseComponent', () => {
  let component: DialogCreateCourseComponent;
  let fixture: ComponentFixture<DialogCreateCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComponentsModule ],
      declarations: [ DialogCreateCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
