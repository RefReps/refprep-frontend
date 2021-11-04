import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Video } from 'src/models/Video/video.model';
import { CourseBreifInfo } from 'src/app/models/course-breif-info';
import { CourseInfo } from 'src/app/models/course-info';
import { SectionsInfo } from 'src/app/models/sections-info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl: string = 'http://localhost:3000';
  videoUrl: string = `${this.baseUrl}/api/video`;
  courseUrl: string = `${this.baseUrl}/api/course`

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

  getAllCoursesInfo(): Observable<CourseBreifInfo[]> {
    return this.http.get<CourseBreifInfo[]>(`${this.courseUrl}`)
  }

  getCourseInfo(courseId: string): Observable<CourseInfo> {
    return this.http.get<CourseInfo>(`${this.courseUrl}/${courseId}`)
  }

}

