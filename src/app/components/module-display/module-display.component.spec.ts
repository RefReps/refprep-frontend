import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ModuleDisplayComponent } from './module-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/service/api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

describe('ModuleDisplayComponent', () => {
  let component: ModuleDisplayComponent;
  let fixture: ComponentFixture<ModuleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatExpansionModule,
        MatCardModule,
        MatIconModule,
        RouterTestingModule 
      ],
      declarations: [ 
        ModuleDisplayComponent],
      providers: [ ApiService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
