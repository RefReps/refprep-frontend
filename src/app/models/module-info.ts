import { Content } from "./content";

export class ModuleInfo {
    _id?: string;
    moduleName?: string;
    lectureDropDate?: Date | null;
    isViewable?: boolean;
    content?: Content[];
}
