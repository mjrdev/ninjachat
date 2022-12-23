import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { NinjaRepository } from '../repositories/ninja-repository';

@Module({
  providers: [
    PrismaService,
    NinjaRepository
  ],
  exports: [NinjaRepository]
})
export class DbModule {}


