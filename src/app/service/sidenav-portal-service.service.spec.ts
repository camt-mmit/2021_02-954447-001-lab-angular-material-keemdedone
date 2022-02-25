import { TestBed } from '@angular/core/testing';

import { SidenavPortalServiceService } from './sidenav-portal-service.service';

describe('SidenavPortalServiceService', () => {
  let service: SidenavPortalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavPortalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
