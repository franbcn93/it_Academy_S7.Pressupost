import { TestBed } from '@angular/core/testing';

import { ServeiPressupostService } from './servei-pressupost.service';

describe('ServeiPressupostService', () => {
  let service: ServeiPressupostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiPressupostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
