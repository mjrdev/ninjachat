import { Test, TestingModule } from '@nestjs/testing';
import { DbModule } from './database/db.module';
import { PrismaService } from './database/prisma.service';
import { NinjaRepository } from './repositories/ninja-repository';
import { HttpController } from './http.controller';
import { HttpModule } from './http.module';

describe('AppController', () => {
  let httpController: HttpController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [DbModule],
      controllers: [HttpController],
      providers: [NinjaRepository, PrismaService],
    }).compile();

    httpController = app.get<HttpController>(HttpController);
  });

  describe('root action', () => {
    it('should return a view', () => {
      expect(httpController.index()).toBeTruthy();
    });
  });
});