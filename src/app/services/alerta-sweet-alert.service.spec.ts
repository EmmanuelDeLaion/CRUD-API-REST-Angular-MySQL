import { TestBed } from '@angular/core/testing';

import { AlertaSweetAlertService } from './alerta-sweet-alert.service';

describe('AlertaSweetAlertService', () => {
  let service: AlertaSweetAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertaSweetAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
