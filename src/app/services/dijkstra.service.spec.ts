/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DijkstraService } from './dijkstra.service';

describe('Service: Dijkstra', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DijkstraService]
    });
  });

  it('should ...', inject([DijkstraService], (service: DijkstraService) => {
    expect(service).toBeTruthy();
  }));
});
