import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { VideoUploadService } from './video-upload.service';

describe('VideoUploadService', () => {
  let service: VideoUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VideoUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});