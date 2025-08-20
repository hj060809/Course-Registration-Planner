import { Module } from '@nestjs/common';
import { MajorResolver } from './major.resolver';
import { MajorService } from './major.service';

@Module({
  providers: [MajorResolver, MajorService],
})
export class MajorModule {}
