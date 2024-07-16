import { TestBed } from '@angular/core/testing';

import { AddWorkHourService } from './add-work-hour.service';

describe('AddWorkHourService', () => {
  let service: AddWorkHourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddWorkHourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
