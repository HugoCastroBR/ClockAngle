import { EntityRepository, Repository } from 'typeorm';
import { Clock } from '../models/clock.entity';

@EntityRepository(Clock)
export class ClockRepository extends Repository<Clock> {
  static createQueryBuilder(arg0: string) {
    throw new Error('Method not implemented.');
  }
  async findOneByHourAndMinute(
    hour: number,
    minute: number,
  ): Promise<Clock | undefined> {
    return this.findOne({ where: { hour, minute } });
  }

  async saveInDatabase(clock: Clock): Promise<Clock> {
    return this.save(clock);
  }
}
