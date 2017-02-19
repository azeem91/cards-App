/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestCallHandlerService } from './rest-call-handler.service';

describe('RestCallHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestCallHandlerService]
    });
  });

  it('should ...', inject([RestCallHandlerService], (service: RestCallHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
