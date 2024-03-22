import { TestBed } from '@angular/core/testing';

import { DataToTableService } from './data-to-table.service';

describe('DataToTableService', () => {
  let service: DataToTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataToTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
