import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module';

@Module({
  imports: [ConfigModule.forRoot(), BlockchainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
