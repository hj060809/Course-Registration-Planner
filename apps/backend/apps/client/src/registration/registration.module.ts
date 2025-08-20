import { Module } from '@nestjs/common';
import { RegistrationResolver } from './registration.resolver';
import { RegistrationService } from './registration.service';

@Module({
  providers: [RegistrationResolver, RegistrationService],
})
export class RegistrationModule {}
