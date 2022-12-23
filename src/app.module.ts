import { Module } from '@nestjs/common';
import { EventsModule } from './websocket/events.module';
import { ApiModule } from './http/api/api.module';
import { DbModule } from './http/database/db.module';
import { HttpModule } from './http/http.module';
import { CreateNinja } from '@use/create-ninja';

@Module({
  imports: [DbModule, HttpModule, ApiModule, EventsModule],
  controllers: [],
  providers: [CreateNinja]
})
export class AppModule {}
