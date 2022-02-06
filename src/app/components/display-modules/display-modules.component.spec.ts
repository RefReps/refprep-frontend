import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsModule } from '../components.module';

import { DisplayModulesComponent } from './display-modules.component';

describe('DisplayModulesComponent', () => {
  let component: DisplayModulesComponent;
  let fixture: ComponentFixture<DisplayModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ComponentsModule,
        HttpClientTestingModule ],
      declarations: [ DisplayModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
