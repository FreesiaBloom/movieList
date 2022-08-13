import { TestBed } from '@angular/core/testing';

import { CurrentParamsService } from './current-params.service';

describe('CurrentParamsService', () => {
  let service: CurrentParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
