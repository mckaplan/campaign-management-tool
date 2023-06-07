import { ErrorService } from "./error.service";
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ErrorService', () => {
  let service: ErrorService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ErrorService,
      ]
    });

    service = TestBed.inject(ErrorService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  afterEach(() => {
    httpMock.verify();
  });
});
