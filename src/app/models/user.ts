import { Course } from 'src/app/models/course';

export class User {
  email?: string;
  password?: string; // password is never sent, it is just for registering
  role?: string;
  authorCourses?: Course[] | string[];
  studentCourses?: Course[] | string[];
}
