import { Injectable } from '@nestjs/common';
import {
  ApiClientModuleOptions,
  ApiClientModuleOptionsFactory,
} from '../../src';

@Injectable()
export class ConfigService implements ApiClientModuleOptionsFactory {
  createModuleOptions(): ApiClientModuleOptions {
    return {
      rootUrl: 'https://api.example.com',
      version: 'v1',
    };
  }
}
