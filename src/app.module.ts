import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClockService } from './services/clocks.service';
import { Clock } from './models/clock.entity';
import { ClockController } from './controllers/clocks.controller';
import { ClockRepository } from './repositories/clock.repository';
import { AppService } from './app.service';
import ormconfig from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Clock, ClockRepository]),
  ],
  controllers: [ClockController],
  providers: [ClockService, AppService],
})
export class AppModule {}
