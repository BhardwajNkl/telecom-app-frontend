import { TestBed } from '@angular/core/testing';

import { WifiRequestService } from './wifi-request.service';

describe('WifiRequestService', () => {
  let service: WifiRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WifiRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
