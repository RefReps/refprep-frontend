import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CourseDashboardComponent } from './course-dashboard.component';
import { ApiService } from 'src/service/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourseDashboardComponent', () => {
  let component: CourseDashboardComponent;
  let fixture: ComponentFixture<CourseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDividerModule,
        MatCardModule,
        HttpClientTestingModule, 
      ],
      declarations: [ 
        CourseDashboardComponent
        ],
      providers: [ ApiService ]
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
