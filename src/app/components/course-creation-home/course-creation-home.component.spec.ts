import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsModule } from '../components.module';

import { CourseCreationHomeComponent } from './course-creation-home.component';

describe('CourseCreationHomeComponent', () => {
  let component: CourseCreationHomeComponent;
  let fixture: ComponentFixture<CourseCreationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComponentsModule ],
      declarations: [ CourseCreationHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCreationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
