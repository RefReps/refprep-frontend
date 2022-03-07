export class Course {
  _id?: string;
  name?: string;
  isTemplate?: boolean;
  isPublished?: boolean;
  isDeleted?: boolean;
  settings?: Settings;
  // authors?: Author[];
  // students?: Student[];
  sections?: Section[] | string[];

  isAuthor?: boolean; // do i need?
}

export class Settings {
  isEnforcements?: boolean;
  enforcementPercent?: number;
  isGradedQuizAdvance?: boolean;
  maximumQuizAttempts?: number;
}

export class Section {
  _id!: string;
  name?: string;
  courseId?: string;
  isPublished?: boolean;
  sectionOrder?: number;
  dropDate?: Date;
  modules?: Module[] | string[];

  isAccessable?: boolean;
}

export class Module {
  _id!: string;
  name?: string;
  sectionId?: string;
  isPublished?: boolean;
  moduleOrder?: number;
  dropDate?: Date;
  contents?: Content[] | string[];

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
  dropDate?: Date;

  isAccessable?: boolean;
}
