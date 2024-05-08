import { TestBed } from '@angular/core/testing';

import { ListsCarsService } from './lists-cars.service';

describe('ListsCarsService', () => {
  let service: ListsCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListsCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
