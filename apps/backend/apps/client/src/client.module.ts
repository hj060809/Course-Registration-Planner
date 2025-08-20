import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { CourseModule } from './course/course.module';
import { MajorModule } from './major/major.module';
import { ScheduleModule } from './schedule/schedule.module';
import { RegistrationModule } from './registration/registration.module';
import { PrismaModule } from 'libs/prisma/prisma.module';

@Module({
  imports: [
    CourseModule,
    MajorModule,
    ScheduleModule,
    RegistrationModule,
    PrismaModule,
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
