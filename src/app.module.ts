import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirestoreModule } from './firestore.module';
import { SampleController } from './sample.controller';

@Module({
  imports: [FirestoreModule],
  controllers: [AppController, SampleController],
  providers: [AppService],
})
export class AppModule {}
