import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/service/api.service';
import { CourseInfoHomeComponent } from './course-info-home.component';

describe('CourseInfoHomeComponent', () => {
  let component: CourseInfoHomeComponent;
  let fixture: ComponentFixture<CourseInfoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDividerModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ 
        CourseInfoHomeComponent
        ],
        providers: [ ApiService ]
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
