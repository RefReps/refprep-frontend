import { Course } from 'src/app/models/course';

export class User {
  email?: string;
  role?: string;
  authorCourses?: Course[] | string[];
  studentCourses?: Course[] | string[];
}
