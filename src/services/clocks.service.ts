import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clock } from '../models/clock.entity';
@Injectable()
export class ClockService {
  constructor(
    @InjectRepository(Clock)
    private clockRepository: Repository<Clock>,
  ) {}

  async saveClock(
    hour: number,
    minute: number,
    angle: number,
    date: Date,
  ): Promise<Clock> {
    const clock = new Clock();
    clock.hour = hour;
    clock.minute = minute;
    clock.angle = angle;
    clock.date = date;

    const existingClock = await this.clockRepository.findOne({
      where: { hour, minute },
    });
    if (existingClock) {
      return existingClock;
    }

    // salva o relógio no banco de dados
    return this.clockRepository.save(clock);
  }
}
