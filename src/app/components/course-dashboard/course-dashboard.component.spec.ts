import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDivider} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CourseDashboardComponent } from './course-dashboard.component';

describe('CourseDashboardComponent', () => {
  let component: CourseDashboardComponent;
  let fixture: ComponentFixture<CourseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDivider,
        MatCardModule 
      ],
      declarations: [ 
        CourseDashboardComponent
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
