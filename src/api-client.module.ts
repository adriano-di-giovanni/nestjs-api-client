import {
  DynamicModule,
  HttpModule,
  Module,
  Provider,
  Type,
} from '@nestjs/common';

import { ApiClientService } from './api-client.service';
import {
  ApiClientModuleAsyncOptions,
  ApiClientModuleOptions,
  ApiClientModuleOptionsFactory,
} from './interfaces';

const API_CLIENT_MODULE_OPTIONS = 'ApiClientModuleOptions';

@Module({
  exports: [ApiClientService],
  providers: [ApiClientService],
})
export class ApiClientModule {
  static registerAsync(options: ApiClientModuleAsyncOptions): DynamicModule {
    const providers = this.createAsyncProviders(options);
    return {
      imports: [
        ...(options.imports || []),
        HttpModule.registerAsync({
          extraProviders: providers,
          inject: [API_CLIENT_MODULE_OPTIONS],
          useFactory: (options: ApiClientModuleOptions) => ({
            baseURL: options.rootUrl.replace(/\/*$/, `/${options.version}`),
          }),
        }),
      ],
      module: ApiClientModule,
      providers,
    };
  }

  private static createAsyncProviders(
    options: ApiClientModuleAsyncOptions
  ): Provider[] {
    const providers = [this.createModuleAsyncOptionsProvider(options)];
    return options.useExisting != null || options.useFactory != null
      ? providers
      : [
          ...providers,
          {
            inject: options.inject,
            provide: options.useClass!,
            useClass: options.useClass!,
          },
        ];
  }

  private static createModuleAsyncOptionsProvider(
    options: ApiClientModuleAsyncOptions
  ): Provider {
    if (options.useFactory != null) {
      return {
        inject: options.inject,
        provide: API_CLIENT_MODULE_OPTIONS,
        useFactory: options.useFactory,
      };
    }

    // https://github.com/microsoft/TypeScript/issues/31603
    const inject = [
      (options.useExisting || options.useClass) as Type<
        ApiClientModuleOptionsFactory
      >,
    ];

    return {
      inject,
      provide: API_CLIENT_MODULE_OPTIONS,
      useFactory: async (factory: ApiClientModuleOptionsFactory) =>
        await factory.createModuleOptions(),
    };
  }
}
