import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Video } from 'src/app/models/video.model';
import { Course, Section, Module } from 'src/app/models/course';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Quiz } from 'src/app/models/quiz';

import { environment as dev } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment.prod';
import { RegisterUser } from 'src/app/_models/registerUser';
import { Student } from 'src/app/models/student';
import { Author } from 'src/app/models/author';
import { QuizQuestion } from 'src/app/models/quiz-question';
import { UserGrade } from 'src/app/models/userGrade';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = isDevMode() ? dev.apiUrl : prod.apiUrl;
  apiUrl: string = `${this.baseUrl}/api/`;
  videoUrl: string = `${this.baseUrl}/api/video`;
  courseUrl: string = `${this.baseUrl}/api/course`;
  sectionUrl: string = `${this.baseUrl}/api/section`;
  moduleUrl: string = `${this.baseUrl}/api/module`;
  contentUrl: string = `${this.baseUrl}/api/content`;
  quizUrl: string = `${this.baseUrl}/api/quiz`;
  authUrl: string = `${this.baseUrl}/api/auth`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.videoUrl}`);
  }

  get(id: any): Observable<Video> {
    return this.http.get(`${this.videoUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.videoUrl}/upload`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.videoUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.baseUrl}?title=${title}`);
  }


  getCourseSections(courseId: string): Observable<Section[]> {
    return this.http.get<Section[]>(`${this.courseUrl}/${courseId}/section`)
  }

  getSectionModules(courseId: string, sectionId: string): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.courseUrl}/${courseId}/section/${sectionId}/module`)
  }

  getModuleContent(courseId: string, sectionId: string, moduleID: string): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.courseUrl}/${courseId}/section/${sectionId}/module/${moduleID}/content`)
  }

  // Start of new calls //

  // Course Routes

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.courseUrl}`)
  }

  getCourse(courseId: string): Observable<Course> {
    return this.http.get<Course>(`${this.courseUrl}/${courseId}`)
  }

  postCourse(courseForm: FormData): void {
    this.http.post(`${this.courseUrl}`, courseForm).subscribe();
  }

  copyCourse(courseId: string, courseForm: FormData): void {
    this.http.post(`${this.courseUrl}/${courseId}/copy`, courseForm).subscribe();
  }

  updateCourse(courseId: string, courseForm: FormData): void {
    this.http.put(`${this.courseUrl}/${courseId}`, courseForm).subscribe();
  }


  // Student Routes

  addStudentsToCourse(courseId: string, emails: string[]): void {
    this.http.post(`${this.courseUrl}/${courseId}/students`, { emails }).subscribe()
  }

  removeStudentsInCourse(courseId: string, emails: string[]): void {
    this.http.post(`${this.courseUrl}/${courseId}/students/remove`, { emails }).subscribe()
  }

  getStudentsInCourse(courseId: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.courseUrl}/${courseId}/students`)
  }


  // Author Routes

  addAuthorsToCourse(courseId: string, emails: string[]): void {
    this.http.post(`${this.courseUrl}/${courseId}/authors`, { emails }).subscribe()
  }

  removeAuthorsInCourse(courseId: string, emails: string[]): void {
    this.http.post(`${this.courseUrl}/${courseId}/authors/remove`, { emails }).subscribe()
  }

  getAuthorsInCourse(courseId: string): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.courseUrl}/${courseId}/authors`)
  }


  // Section Routes

  getSections(courseId: string): Observable<Section[]> {
    const query = `courseId=${courseId}`
    return this.http.get<Section[]>(`${this.sectionUrl}?${query}`)
  }

  postSection(sectionForm: FormData): void {
    this.http.post(`${this.sectionUrl}`, sectionForm).subscribe();
  }

  updateSection(sectionId: string, form: FormData): void {
    this.http.put(`${this.sectionUrl}/${sectionId}`, form).subscribe();
  }

  deleteSection(sectionId: string): void {
    this.http.delete(`${this.sectionUrl}/${sectionId}`).subscribe();
  }

  // Module Routes

  getModules(sectionId: string): Observable<Module[]> {
    const query = `sectionId=${sectionId}`
    return this.http.get<Module[]>(`${this.moduleUrl}?${query}`)
  }

  postModule(moduleForm: FormData): void {
    this.http.post(`${this.moduleUrl}`, moduleForm).subscribe();
  }

  updateModule(moduleId: string, form: FormData): void {
    this.http.put(`${this.moduleUrl}/${moduleId}`, form).subscribe();
  }

  deleteModule(moduleId: string): void {
    this.http.delete(`${this.moduleUrl}/${moduleId}`).subscribe();
  }

  // Content Routes

  getContents(moduleId: string): Observable<Content[]> {
    const query = `moduleId=${moduleId}`
    return this.http.get<Content[]>(`${this.contentUrl}?${query}`)
  }

  postContent(contentForm: FormData): void {
    this.http.post(`${this.contentUrl}`, contentForm).subscribe()
  }

  updateContent(contentId: string, form: FormData): void {
    this.http.put(`${this.contentUrl}/${contentId}`, form).subscribe();
  }

  deleteContent(contentId: string): void {
    this.http.delete(`${this.contentUrl}/${contentId}`).subscribe();
  }

  // Quiz Routes

  // returns 2 objects: Quiz and QuizVersion (gets the active version)
  getQuizInfo(quizId: string): Observable<any> {
    return this.http.get(`${this.quizUrl}/${quizId}`)
  }

  postNewQuiz(name: string): Observable<Quiz> {
    return this.http.post<Quiz>(`${this.quizUrl}`, { name })
  }

  // !! currently not working possibly) !! 
  // returns: Questions and QuizSubmission
  // previously: just sent back questions
  // now: sends back questions and the quiz submission the user is on
  startQuiz(quizId: string): Observable<any> {
    return this.http.get(`${this.quizUrl}/${quizId}/start`)
  }

  // !! currently not working (possibly) !!
  // needs new url `${this.quizUrl}/${quizId}/submission/${submissionId}`
  // previously: used to save the quizId, userId, and userAnswers
  // now: sends back submissionId and userAnswers
  submissionSave(quizId: string, answers: any): Observable<any> {
    return this.http.put(`${this.quizUrl}/${quizId}/submission-save`, answers)
  }

  // !! currently not working !!
  // needs new url '`${this.quizUrl}/${quizId}/grade/${submissionId}'
  // previously: needed email and quizId as params
  // now: needs emails, quizId, and submissionId as params
  gradeQuiz(quizId: string): Observable<any> {
    return this.http.post(`${this.quizUrl}/${quizId}/grade`, {})
  }

  batchPutQuestions(quizId: string, quizQuestions: any): void {
    this.http.put(`${this.quizUrl}/${quizId}/batch`, quizQuestions).subscribe()
  }

  // Quiz Grade Routes

  // !! currently not working (possibly) !!
  // theoretically should work: only returns submissions
  getAllQuizGrades(quizId: string): Observable<UserGrade[]> {
    return this.http.get<UserGrade[]>(`${this.quizUrl}/${quizId}/view-grades`)
  }

  // !! currently not working (possibly) !!
  // theoretically should work: only returns submissions
  getQuizGrade(quizId: string, email: string): Observable<UserGrade[]> {
    return this.http.get<UserGrade[]>(`${this.quizUrl}/${quizId}/grade`)
  }

  // User Routes
  registerUser(data: RegisterUser): Observable<any> {
    return this.http.post<RegisterUser>(`${this.authUrl}/register`, data)
  }

  // Video Routes

  getVideoMetadata(videoId: string): Observable<Video> {
    return this.http.get<Video>(`${this.videoUrl}/${videoId}/meta`)
  }

  postVideo(file: File): Observable<Video> {
    const form = new FormData()
    form.append('video', file)
    return this.http.post<Video>(`${this.videoUrl}`, form)
  }

  uploadVideoWithProgress(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('video', file); //field name to file data 

    const req = new HttpRequest('POST', `${this.baseUrl}/api/video/`, formData, {
      reportProgress: true,
      responseType: 'json'

    });

    console.log(req);

    return this.http.request(req);
  }
}