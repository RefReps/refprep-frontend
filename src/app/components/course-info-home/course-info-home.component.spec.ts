import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { CourseInfoHomeComponent } from './course-info-home.component';

describe('CourseInfoHomeComponent', () => {
  let component: CourseInfoHomeComponent;
  let fixture: ComponentFixture<CourseInfoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDividerModule
      ],
      declarations: [ 
        CourseInfoHomeComponent
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInfoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
