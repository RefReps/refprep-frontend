import { Component, Input, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { ModuleFormAddComponent } from '../module-form-add/module-form-add.component';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { ContentFormAddVideoComponent } from '../content-form-add-video/content-form-add-video.component';
import { ContentAddTabSelectComponent } from '../content-add-tab-select/content-add-tab-select.component';
import { ModuleDeleteFormComponent } from '../module-delete-form/module-delete-form.component';

@Component({
  selector: 'app-edit-display-modules',
  templateUrl: './edit-display-modules.component.html',
  styleUrls: ['./edit-display-modules.component.css']
})
export class EditDisplayModulesComponent implements OnInit {

  @Input() sectionId: string = '';
  modules: Module[] = [];

  constructor(
    private Api: ApiService,
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.getModules()
  }

  getModules(): void {
    this.Api.getModules(this.sectionId)
      .subscribe(info => this.modules = info)
  }

  openAddModuleDialog(): void {
    this.dialogService.open(ModuleFormAddComponent, { sectionId: this.sectionId })
  }

  openAddContentVideoDialog(moduleId: string): void {
    this.dialogService.open(ContentFormAddVideoComponent, { moduleId })
  }

  openAddContentTabDialog(moduleId: string): void {
    this.dialogService.open(ContentAddTabSelectComponent, { moduleId })
  }

  openDeleteModuleDialog(moduleId: string): void {
    this.dialogService.open(ModuleDeleteFormComponent, { moduleId })
  }


  onDrop(event: any) {
    const moduleId = this.modules[event.previousIndex]._id
    if (event.previousContainer === event.container && moduleId) {
      this.updateModuleOrder(moduleId, event.currentIndex + 1)
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  updateModuleOrder(moduleId: string, newOrder: number): void {
    const form = new FormData()
    form.append('moduleOrder', newOrder.toString())
    this.Api.updateModule(moduleId, form)
  }

}
