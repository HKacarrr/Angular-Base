import { TestBed } from '@angular/core/testing';

import { AbstractProviderService } from './abstract.provider.service';

describe('AbstractProviderService', () => {
  let service: AbstractProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
