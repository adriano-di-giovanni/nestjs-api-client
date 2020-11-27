import { ModuleMetadata } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { ApiClientService } from '../src';

export const bootstrap = (metadata: ModuleMetadata) => () => {
  let service: ApiClientService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule(metadata).compile();
    service = moduleRef.get<ApiClientService>(ApiClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
};
