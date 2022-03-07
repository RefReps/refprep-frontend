import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';

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

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });
});
