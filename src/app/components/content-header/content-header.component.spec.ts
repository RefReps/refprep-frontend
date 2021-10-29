import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { ContentHeaderComponent } from './content-header.component';

describe('ContentHeaderComponent', () => {
  let component: ContentHeaderComponent;
  let fixture: ComponentFixture<ContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDividerModule
      ],
      declarations: [ 
        ContentHeaderComponent
         ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
