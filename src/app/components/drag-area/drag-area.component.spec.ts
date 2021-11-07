import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { DragAreaComponent } from './drag-area.component';

describe('DragAreaComponent', () => {
  let component: DragAreaComponent;
  let fixture: ComponentFixture<DragAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DragDropModule,
        MatCardModule
      ],
      declarations: [ 
        DragAreaComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
