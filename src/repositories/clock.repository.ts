import { EntityRepository, Repository } from 'typeorm';
import { Clock } from '../models/clock.entity';

@EntityRepository(Clock)
export class ClockRepository extends Repository<Clock> {}
