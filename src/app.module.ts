import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticModule } from './elasticsearch-server/elastic.module';

@Module({
  imports: [ElasticModule], //ElasticModule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}