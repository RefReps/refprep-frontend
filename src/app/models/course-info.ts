import { Author } from "./author";
import { SectionsInfo } from "./sections-info";
import { Settings } from "./settings";

export class CourseInfo {
    _id?: string;
    courseName?: string;
    isTemplateCourse?: boolean;
    sections?: SectionsInfo[];
    authors?: Author[];
    settings?: Settings;

}
