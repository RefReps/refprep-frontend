import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Video } from 'src/app/models/video.model';
import { Course } from 'src/app/models/course';
import { SectionsInfo } from 'src/app/models/sections-info';
import { ModuleInfo } from 'src/app/models/module-info';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Module } from 'src/app/models/module';
import { Section } from 'src/app/models/section';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl: string = 'http://localhost:3000';
  apiUrl: string = `${this.baseUrl}/api/`;
  videoUrl: string = `${this.baseUrl}/api/video`;
  courseUrl: string = `${this.baseUrl}/api/course`;
  sectionUrl: string = `${this.baseUrl}/api/section`;
  moduleUrl: string = `${this.baseUrl}/api/module`;
  contentUrl: string = `${this.baseUrl}/api/content`;

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

  updateCourse(courseId: string, courseForm: FormData): void {
    this.http.put(`${this.courseUrl}/${courseId}`, courseForm).subscribe();
  }

  // Section Routes

  getSections(courseId: string): Observable<Section[]> {
    const query = `courseId=${courseId}`
    return this.http.get<Section[]>(`${this.sectionUrl}?${query}`)
  }

  // Module Routes

  getModules(sectionId: string): Observable<Module[]> {
    const query = `sectionId=${sectionId}`
    return this.http.get<Module[]>(`${this.moduleUrl}?${query}`)
  }

  // Content Routes

  getContents(moduleId: string): Observable<Content[]> {
    const query = `moduleId=${moduleId}`
    return this.http.get<Content[]>(`${this.contentUrl}?${query}`)
  }

  // Video Routes

  getVideoMetadata(videoId: string): Observable<Video> {
    return this.http.get<Video>(`${this.videoUrl}/${videoId}/meta`)
  }



}