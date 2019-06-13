import { TestBed } from '@angular/core/testing';

import { MainProgectService } from './main-progect.service';

describe('MainProgectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainProgectService = TestBed.get(MainProgectService);
    expect(service).toBeTruthy();
  });
});
