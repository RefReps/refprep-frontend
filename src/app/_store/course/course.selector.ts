import { Course } from 'src/app/models/course';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCourse = 
    createFeatureSelector<{ course: Course }>('course');
