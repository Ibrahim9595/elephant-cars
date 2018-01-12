import { TestBed, inject } from '@angular/core/testing';

import { UserAuthinticationService } from './user-authintication.service';

describe('UserAuthinticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthinticationService]
    });
  });

  it('should be created', inject([UserAuthinticationService], (service: UserAuthinticationService) => {
    expect(service).toBeTruthy();
  }));
});
