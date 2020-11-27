import { ApiClientModuleOptions } from './api-client-module-options.interface';

export interface ApiClientModuleOptionsFactory {
  createModuleOptions():
    | Promise<ApiClientModuleOptions>
    | ApiClientModuleOptions;
}
