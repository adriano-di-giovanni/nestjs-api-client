import { Module } from '@nestjs/common';
import { ApiClientModule } from '../src';
import { ConfigModule, ConfigService } from './config';

@Module({
  imports: [
    ApiClientModule.registerAsync({
      imports: [ConfigModule],
      useExisting: ConfigService,
    }),
  ],
})
export class WithAsyncOptionsUseExisting {}
