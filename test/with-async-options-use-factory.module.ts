import { Module } from '@nestjs/common';
import { ApiClientModule } from '../src';

@Module({
  imports: [
    ApiClientModule.registerAsync({
      useFactory: () => ({ rootUrl: 'https://api.example.com', version: 'v1' }),
    }),
  ],
})
export class WithAsyncOptionsUseFactory {}
