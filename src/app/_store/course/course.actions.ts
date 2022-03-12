import { Course } from 'src/app/models/course';
import { createAction, props } from '@ngrx/store';

export const loadCourse = createAction(
  '[Course] Load Course',
  props<{ course: Course }>()
);

export const clearCourse = createAction('[Course] Clear Course');
