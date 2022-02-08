import { TestBed } from '@angular/core/testing';

import { QuizAnswerSaverService } from './quiz-answer-saver.service';

describe('QuizAnswerSaverService', () => {
  let service: QuizAnswerSaverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizAnswerSaverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
