import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clock } from '../models/clock.entity';

@Injectable()
export class ClocksService {
  constructor(
    @InjectRepository(Clock)
    private clockRepository: Repository<Clock>,
  ) {}

  async findAll(): Promise<Clock[]> {
    return await this.clockRepository.find();
  }

  async findOne(id: number): Promise<Clock> {
    return await this.clockRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(clock: Clock): Promise<Clock> {
    return await this.clockRepository.save(clock);
  }

  async calcAngle(hour: number, minute: number): Promise<Clock> {
    const angle = Math.abs(0.5 * (60 * hour - 11 * minute));
    const date = new Date();
    return await this.clockRepository.save({ hour, minute, angle, date });
  }

  async update(id: number, clock: Clock): Promise<Clock> {
    const updatedClock = await this.clockRepository.findOne({
      where: {
        id: id,
      },
    });
    updatedClock.hour = clock.hour;
    updatedClock.minute = clock.minute;
    updatedClock.angle = clock.angle;
    updatedClock.date = clock.date;
    return await this.clockRepository.save(updatedClock);
  }

  async delete(id: number): Promise<void> {
    await this.clockRepository.delete(id);
  }
}
