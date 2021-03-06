import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Module Imports
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

// Component Imports
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { DragAreaComponent } from './drag-area/drag-area.component';
import { SidebarIconComponent } from './sidebar-icon/sidebar-icon.component';
import { CourseInfoHomeComponent } from './course-info-home/course-info-home.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { DragDropAreaComponent } from './drag-drop-area/drag-drop-area.component';
import { CourseSidebarComponent } from './course-sidebar/course-sidebar.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { EditCurriculumComponent } from './edit-curriculum/edit-curriculum.component';
import { DisplayContentsComponent } from './display-contents/display-contents.component';
import { DisplayModulesComponent } from './display-modules/display-modules.component';
import { DisplaySectionsComponent } from './display-sections/display-sections.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseAddFormComponent } from './course-add-form/course-add-form.component';
import { CourseEditFormComponent } from './course-edit-form/course-edit-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { SectionFormAddComponent } from './section-form-add/section-form-add.component';
import { ModuleFormAddComponent } from './module-form-add/module-form-add.component';
import { EditDisplaySectionsComponent } from './edit-display-sections/edit-display-sections.component';
import { EditDisplayModulesComponent } from './edit-display-modules/edit-display-modules.component';
import { EditDisplayContentsComponent } from './edit-display-contents/edit-display-contents.component';
import { SectionFormDeleteComponent } from './section-form-delete/section-form-delete.component';
import { ContentFormAddVideoComponent } from './content-form-add-video/content-form-add-video.component';
import { CourseDuplicateFormComponent } from './course-duplicate-form/course-duplicate-form.component';
import { CourseCreationHomeComponent } from './course-creation-home/course-creation-home.component';
import { QuizBuilderComponent } from './quiz-builder/quiz-builder.component';
import { ContentFormAddQuizComponent } from './content-form-add-quiz/content-form-add-quiz.component';
import { ContentAddTabSelectComponent } from './content-add-tab-select/content-add-tab-select.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizStudentViewComponent } from './quiz-student-view/quiz-student-view.component';
import { CourseAddAuthorComponent } from './course-add-author/course-add-author.component';
import { CourseAddStudentComponent } from './course-add-student/course-add-student.component';
import { QuizGradesViewerComponent } from './quiz-grades-viewer/quiz-grades-viewer.component';
import { QuizStudentGradeComponent } from './quiz-student-grade/quiz-student-grade.component';
import { ModuleDeleteFormComponent } from './module-delete-form/module-delete-form.component';
import { ContentDeleteFormComponent } from './content-delete-form/content-delete-form.component';
import { ViewGradedQuizComponent } from './view-graded-quiz/view-graded-quiz.component';
import { CourseQuizEditComponent } from './course-quiz-edit/course-quiz-edit.component';
import { EditQuizQuestionComponent } from './edit-quiz-question/edit-quiz-question.component';
import { UpdateSectionDialogComponent } from './update-section-dialog/update-section-dialog.component';
import { UpdateModuleDialogComponent } from './update-module-dialog/update-module-dialog.component';
import { UpdateContentDialogComponent } from './update-content-dialog/update-content-dialog.component';
import { JoinCourseByCodeComponent } from './join-course-by-code/join-course-by-code.component';
import { CourseSettingsComponent } from './course-settings/course-settings.component';
import { UpdateContentDateDialogComponent } from './update-content-date-dialog/update-content-date-dialog.component';
import { ImportStudentsCsvComponent } from './import-students-csv/import-students-csv.component';
import { ContentFormAddTextComponent } from './content-form-add-text/content-form-add-text.component';
import { CourseGradesComponent } from './course-grades/course-grades.component';
import { CourseStudentGradesComponent } from './course-student-grades/course-student-grades.component';
import { CourseDeletionComponent } from './course-deletion/course-deletion.component';
import { CourseAnnouncementComponent } from './course-announcement/course-announcement.component';
import { UpdateAnnouncementDialogComponent } from './update-announcement-dialog/update-announcement-dialog.component';
import { AdminUserViewComponent } from './admin-user-view/admin-user-view.component';
import { DialogChangePasswordComponent } from './dialog-change-password/dialog-change-password.component';
import { StudentProgressViewComponent } from './student-progress-view/student-progress-view.component';
import { ContentProgressComponent } from './content-progress/content-progress.component';
import { DialogChangeNameComponent } from './dialog-change-name/dialog-change-name.component';
import { DialogChangeEmailComponent } from './dialog-change-email/dialog-change-email.component';
import { DialogChangeRoleComponent } from './dialog-change-role/dialog-change-role.component';

@NgModule({
  declarations: [ // Declare all components in the app/component folder (Don't forget to export)
    DragAreaComponent,
    CourseDashboardComponent,
    SidebarIconComponent,
    CourseInfoHomeComponent,
    ContentHeaderComponent,
    DragDropAreaComponent,
    CourseSidebarComponent,
    VideoUploadComponent,
    VideoViewerComponent,
    EditCurriculumComponent,
    DisplayContentsComponent,
    DisplayModulesComponent,
    DisplaySectionsComponent,
    CourseCardComponent,
    CourseAddFormComponent,
    CourseEditFormComponent,
    DialogComponent,
    SectionFormAddComponent,
    ModuleFormAddComponent,
    EditDisplaySectionsComponent,
    EditDisplayModulesComponent,
    EditDisplayContentsComponent,
    SectionFormDeleteComponent,
    ContentFormAddVideoComponent,
    CourseDuplicateFormComponent,
    CourseCreationHomeComponent,
    QuizBuilderComponent,
    ContentFormAddQuizComponent,
    ContentAddTabSelectComponent,
    LogoutComponent,
    RegisterFormComponent,
    QuizQuestionComponent,
    QuizStudentViewComponent,
    CourseAddAuthorComponent,
    CourseAddStudentComponent,
    QuizGradesViewerComponent,
    QuizStudentGradeComponent,
    ModuleDeleteFormComponent,
    ContentDeleteFormComponent,
    ViewGradedQuizComponent,
    CourseQuizEditComponent,
    EditQuizQuestionComponent,
    UpdateSectionDialogComponent,
    UpdateModuleDialogComponent,
    UpdateContentDialogComponent,
    JoinCourseByCodeComponent,
    CourseSettingsComponent,
    UpdateContentDateDialogComponent,
    ImportStudentsCsvComponent,
    ContentFormAddTextComponent,
    CourseGradesComponent,
    CourseStudentGradesComponent,
    CourseDeletionComponent,
    CourseAnnouncementComponent,
    UpdateAnnouncementDialogComponent,
    AdminUserViewComponent,
    DialogChangePasswordComponent,
    StudentProgressViewComponent,
    ContentProgressComponent,
    DialogChangeNameComponent,
    DialogChangeEmailComponent,
    DialogChangeRoleComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    DragDropModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AngularEditorModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [ // Export all components in the app/component folder
    DragAreaComponent,
    CourseDashboardComponent,
    SidebarIconComponent,
    CourseInfoHomeComponent,
    ContentHeaderComponent,
    DragDropAreaComponent,
    CourseSidebarComponent,
    VideoUploadComponent,
    VideoViewerComponent,
    EditCurriculumComponent,
    DisplayContentsComponent,
    DisplayModulesComponent,
    DisplaySectionsComponent,
    CourseCardComponent,
    CourseAddFormComponent,
    CourseEditFormComponent,
    DialogComponent,
    SectionFormAddComponent,
    ModuleFormAddComponent,
    EditDisplaySectionsComponent,
    EditDisplayModulesComponent,
    EditDisplayContentsComponent,
    SectionFormDeleteComponent,
    ModuleDeleteFormComponent,
    ContentFormAddVideoComponent,
    CourseDuplicateFormComponent,
    CourseCreationHomeComponent,
    QuizBuilderComponent,
    ContentFormAddQuizComponent,
    ContentAddTabSelectComponent,
    LogoutComponent,
    RegisterFormComponent,
    QuizQuestionComponent,
    QuizStudentViewComponent,
    CourseAddAuthorComponent,
    CourseAddStudentComponent,
    QuizGradesViewerComponent,
    QuizStudentGradeComponent,
    ViewGradedQuizComponent,
    CourseQuizEditComponent,
    EditQuizQuestionComponent,
    UpdateSectionDialogComponent,
    UpdateModuleDialogComponent,
    UpdateContentDialogComponent,
    JoinCourseByCodeComponent,
    CourseSettingsComponent,
    UpdateContentDateDialogComponent,
    ImportStudentsCsvComponent,
    ContentFormAddTextComponent,
    CourseGradesComponent,
    CourseStudentGradesComponent,
    CourseDeletionComponent,
    AdminUserViewComponent,
    DialogChangePasswordComponent,
    StudentProgressViewComponent,
    ContentProgressComponent,
    DialogChangeNameComponent,
    DialogChangeEmailComponent,
    DialogChangeRoleComponent,
  ],
})
export class ComponentsModule { }