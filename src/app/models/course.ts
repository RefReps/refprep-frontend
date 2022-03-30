import { User } from "./user";

export class Course {
  _id?: string;
  name?: string;
  isTemplate?: boolean;
  isPublished?: boolean;
  isDeleted?: boolean;
  settings?: Settings;
  studentCourseCode?: CourseCode;
  // authors?: Author[];
  // students?: Student[];
  sections?: Section[];

  isAuthor?: boolean; // do i need?
}

export class CourseCode {
  isLocked?: boolean;
  code?: string;
  activeUntil?: string;
}

export class Settings {
  isEnforcements?: boolean;
  enforcementPercent?: number;
  isGradedQuizAdvance?: boolean;
  maximumQuizAttempts?: number;
  courseCapacity?: number;
}

export class Section {
  _id!: string;
  name?: string;
  courseId?: string;
  isPublished?: boolean;
  sectionOrder?: number;
  dropDate?: string;
  modules?: Module[];

  isAccessable?: boolean;
}

export class Module {
  _id!: string;
  name?: string;
  sectionId?: string;
  isPublished?: boolean;
  moduleOrder?: number;
  dropDate?: string;
  contents?: Content[];

  isAccessable?: boolean;
}
export class Content {
  _id?: string;
  name?: string;
  toDocument?: string;
  onModel?: string;
  moduleId?: string;
  isPublished?: boolean;
  contentOrder?: number;
  dropDate?: string;
  isCompleted?: boolean;
  // studentsCompleted?: StudentsCompleted[];
  isAccessable?: boolean;
}

