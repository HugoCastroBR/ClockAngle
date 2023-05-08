import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Clock {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  hour: number;

  @Column()
  @ApiProperty({
    required: false,
    default: 0,
    description: 'Minute hand',
  })
  minute?: number;

  @Column()
  @ApiProperty({
    description: 'Angle between hour and minute hands',
  })
  angle: number;

  @Column()
  @ApiProperty()
  date: Date;
}
