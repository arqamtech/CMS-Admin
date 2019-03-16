import { TestBed } from '@angular/core/testing';

import { PostEditingService } from './post-editing.service';

describe('PostEditingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostEditingService = TestBed.get(PostEditingService);
    expect(service).toBeTruthy();
  });
});
