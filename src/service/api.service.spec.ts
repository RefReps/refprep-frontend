import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
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

  it('should return expected courses (HttpClient called once)', (done: DoneFn) => {
    const expectedCourses: CourseInfo[] =
    [{"_id":"61715885a88ae2f163083ebf","courseName":"Baseball 101"},{"_id":"6172bc7fcd8d63270bfdf43b","courseName":"Course Not Named"},{"_id":"6175aa47af8840e6d8543d4d","courseName":"Basketball 101"},{"_id":"61770c9a6f259d21318d0867","courseName":"Basketball 101"}];
    
    httpClientSpy.get.and.returnValue(of(expectedCourses));

    apiService.getAllCoursesInfo().subscribe(
      courses => {
        expect(courses).toEqual(expectedCourses, 'expected courses');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });
});
