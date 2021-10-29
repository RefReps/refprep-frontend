import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ModuleDisplayComponent } from './module-display.component';

describe('ModuleDisplayComponent', () => {
  let component: ModuleDisplayComponent;
  let fixture: ComponentFixture<ModuleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatAccordion,
        MatExpansionModule,
        MatCardModule 
      ],
      declarations: [ 
        ModuleDisplayComponent]
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
