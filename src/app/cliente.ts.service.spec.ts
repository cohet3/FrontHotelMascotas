import { TestBed } from '@angular/core/testing';

import { ClienteTsService } from './cliente.ts.service';

describe('ClienteTsService', () => {
  let service: ClienteTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
