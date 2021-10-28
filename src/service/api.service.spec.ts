import { HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from 'src/async-observable-helpers';
import { CourseInfo } from 'src/app/models/course-info';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let apiService: ApiService;

  beforeEach(() => {
    //TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    apiService = new ApiService(httpClientSpy as any);
  });

  it('should return expected courses', (done: DoneFn) => {
    const expectedCourses: CourseInfo[] =
      [{_id:"61793332928a024f0a2ba021", courseName:"Course Not Named"},{_id:"61793356928a024f0a2ba025", courseName:"Course 1"},{_id:"61793375928a024f0a2ba02a", courseName:"Course 2"}];    
    httpClientSpy.get.and.returnValue(asyncData(expectedCourses));

    apiService.getAllCoursesInfo().subscribe(
      courses => {
        expect(courses).toEqual(expectedCourses, 'expected courses');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    apiService.getAllCoursesInfo().subscribe(
      courses => done.fail('error expected'),
      error => {
        expect(error.message).toContain('404 Not Found');
        done();
      }
    );
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });
});
