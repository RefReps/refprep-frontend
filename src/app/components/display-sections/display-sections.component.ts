import { Component, Input, OnInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { string } from 'joi';
import { Course, Section } from 'src/app/models/course';
import { selectCourse } from 'src/app/_store/course/course.selector';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-display-sections',
  templateUrl: './display-sections.component.html',
  styleUrls: ['./display-sections.component.css']
})
export class DisplaySectionsComponent implements OnInit {

  @Input() courseId: string = '';
  sections: Section[] = [];
  course: Course = {};
  course$ = this.store.select(selectCourse);

  constructor(
    private Api: ApiService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.getSections()
  }

  getSections(): void {
    this.course$.subscribe( state =>
       { if (state.course) {
         let sections = state.course.sections as Section[]
           this.sections = sections
        }
      })
    }
  }
        
