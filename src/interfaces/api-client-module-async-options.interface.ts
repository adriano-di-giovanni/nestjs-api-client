import { ModuleMetadata, Type } from '@nestjs/common';

import { ApiClientModuleOptionsFactory } from './api-client-module-options-factory.interface';
import { ApiClientModuleOptions } from './api-client-module-options.interface';

export interface ApiClientModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<ApiClientModuleOptionsFactory>;
  useExisting?: Type<ApiClientModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<ApiClientModuleOptions> | ApiClientModuleOptions;
}
