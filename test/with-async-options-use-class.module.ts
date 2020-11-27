import { Module } from '@nestjs/common';
import { ApiClientModule } from '../src';
import { ConfigModule, ConfigService } from './config';

@Module({
  imports: [
    ApiClientModule.registerAsync({
      imports: [ConfigModule],
      useClass: ConfigService,
    }),
  ],
})
export class WithAsyncOptionsUseClass {}
