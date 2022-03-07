import { Content } from './course';

export class ModuleInfo {
  _id?: string;
  moduleName?: string;
  lectureDropDate?: Date | null;
  isViewable?: boolean;
  content?: Content[];
}
