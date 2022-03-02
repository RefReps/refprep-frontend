import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/models/section';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { ModuleFormAddComponent } from '../module-form-add/module-form-add.component';
import { SectionFormAddComponent } from '../section-form-add/section-form-add.component';
import { SectionFormDeleteComponent } from '../section-form-delete/section-form-delete.component';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { QuizBuilderComponent } from '../quiz-builder/quiz-builder.component';
import { UpdateSectionDialogComponent } from '../update-section-dialog/update-section-dialog.component';

@Component({
  selector: 'app-edit-display-sections',
  templateUrl: './edit-display-sections.component.html',
  styleUrls: ['./edit-display-sections.component.css']
})
export class EditDisplaySectionsComponent implements OnInit {

  @Input() courseId: string = '';
  sections: Section[] = [];

  constructor(
    private Api: ApiService,
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.getSections()
  }

  getSections(): void {
    this.Api.getSections(this.courseId)
      .subscribe(info => this.sections = info)
  }

  openAddSectionDialog(): void {
    const dialogRef = this.dialogService.open(SectionFormAddComponent, { courseId: this.courseId })
  }

  openUpdateSectionDialog(sectionId: string): void {
    this.dialogService.open(UpdateSectionDialogComponent, { sectionId })
  }

  openDeleteSectionDialog(sectionId: string): void {
    this.dialogService.open(SectionFormDeleteComponent, { sectionId })
  }

  openAddModuleDialog(sectionId: string): void {
    const dialogRef = this.dialogService.open(ModuleFormAddComponent, { sectionId })
  }

  onDrop(event: any) {
    const sectionId = this.sections[event.previousIndex]._id;
    if (event.previousContainer === event.container && sectionId) {
      this.updateSectionOrder(sectionId, event.currentIndex + 1)
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  updateSectionOrder(sectionId: string, newOrder: number): void {
    const form = new FormData()
    form.append('sectionOrder', newOrder.toString())
    this.Api.updateSection(sectionId, form)
  }

}
