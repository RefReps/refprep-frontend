import { Settings } from "./settings";

export class Course {
    _id?: string;
    name?: string;
    isTemplate?: boolean;
    isPublished?: boolean;
    isDeleted?: boolean;
    settings?: Settings;
    isAuthor?: boolean;
}