import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';
import { CourseBreifInfo } from 'src/app/models/course-breif-info';

describe('ApiService', () => {
  let httpTestingController: HttpTestingController;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    apiService = TestBed.get(ApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  //need to make a dummy set of info to test against
  it('getAllCoursesInfo() should return expected info', (done) => {
    const expectedData: CourseBreifInfo[] = [
      {'_id':'61793332928a024f0a2ba021','courseName':'Course Not Named'},
      {'_id':'61793356928a024f0a2ba025','courseName':'Course 1'},
      {'_id':'61793375928a024f0a2ba02a','courseName':'Course 2'}   
    ];

    apiService.getAllCoursesInfo().subscribe( data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:3000/api/course');
    testRequest.flush(expectedData);
  });


  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });
});
