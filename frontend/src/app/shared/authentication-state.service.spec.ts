import { TestBed } from '@angular/core/testing';

import { AuthenticationStateService } from './authentication-state.service';

describe('AuthenticationStateService', () => {
  let service: AuthenticationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
