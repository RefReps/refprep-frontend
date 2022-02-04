import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Video } from 'src/app/models/video.model';
import { Course } from 'src/app/models/course';
import { SectionsInfo } from 'src/app/models/sections-info';
import { ModuleInfo } from 'src/app/models/module-info';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Module } from 'src/app/models/module';
import { Section } from 'src/app/models/section';
import { Quiz } from 'src/app/models/quiz';

import { environment as dev } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment.prod';

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

  constructor(private http: HttpClient) {}

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

  
  getCourseSections(courseId: string): Observable<SectionsInfo[]>{
    return this.http.get<SectionsInfo[]>(`${this.courseUrl}/${courseId}/section`)
  }
  
  getSectionModules(courseId: string, sectionId: string): Observable<ModuleInfo[]>{
    return this.http.get<ModuleInfo[]>(`${this.courseUrl}/${courseId}/section/${sectionId}/module`)
  }
  
  getModuleContent(courseId: string, sectionId: string, moduleID: string): Observable<Content[]>{
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

  // Quiz Routes

  postNewQuiz(name: string): Observable<Quiz> {
    return this.http.post<Quiz>(`${this.quizUrl}`, {name})
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