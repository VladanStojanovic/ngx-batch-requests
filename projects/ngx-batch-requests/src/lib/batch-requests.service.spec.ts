import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BATCH_REQUESTS_CONFIG, defaultBatchRequestsConfig } from './batch-requests.config';

import { BatchRequestsService } from './batch-requests.service';
import { RxNgZoneScheduler } from 'ngx-rxjs-zone-scheduler';

describe('BatchRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: HttpClient, useClass: class MockHttpWrapper {
          request() {}
        },
      },
      {
        provide: BATCH_REQUESTS_CONFIG, useValue: defaultBatchRequestsConfig,
      },
      {
        provide: RxNgZoneScheduler, useClass: class MockRxNgZoneScheduler {
          enterNgZone() {}
          leaveNgZone() {}
        }
      }
    ]
  }));

  it('should be created', () => {
    const service: BatchRequestsService = TestBed.inject(BatchRequestsService);
    expect(service).toBeTruthy();
  });
});
