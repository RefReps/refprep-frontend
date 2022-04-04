import { Course, Section } from 'src/app/models/course';
import { createReducer, on } from '@ngrx/store';
import * as CourseActions from './course.actions';

const initState: Course = {};

export const courseReducer = createReducer(
  initState,
  on(CourseActions.loadCourse, (state, { course }) => {
    return { ...state, course: {...course} };
  }),
  on(CourseActions.clearCourse, () => {
    return {};
  })
);
