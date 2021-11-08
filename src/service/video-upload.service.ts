import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  upload(file: File, courseID: string, sectionID: string, moduleID: string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('video', file); //field name to file data 
    formData.append('courseId', courseID);
    formData.append('sectionId', sectionID);
    formData.append('moduleId', moduleID);

    const req = new HttpRequest('POST', `${this.baseUrl}/api/video/`, formData, {
      reportProgress: true,
      responseType: 'json'

    });

    console.log(file);

    return this.http.request(req);
  }
}