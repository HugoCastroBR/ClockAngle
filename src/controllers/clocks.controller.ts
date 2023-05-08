import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { ClockService } from '../services/clocks.service';
@Controller('rest/clock')
export class ClockController {
  constructor(private readonly clockService: ClockService) {}

  @Get(':hour/:minute?')
  @ApiParam({ name: 'hour', type: 'number' })
  @ApiParam({ name: 'minute', type: 'number', required: false })
  getClockAngle(@Param('hour') hour: number, @Param('minute') minute: string) {
    let parsedMinute = parseInt(minute);
    if (isNaN(parsedMinute)) {
      parsedMinute = 0;
    }
    const hourAngle = (hour % 12) * 30 + parsedMinute / 2;
    const minuteAngle = parsedMinute * 6;
    const angle = Math.round(Math.abs(hourAngle - minuteAngle));
    const date = new Date();

    this.clockService.saveClock(hour, parsedMinute, angle, date);
    return { angle: Math.min(angle, 360 - angle) };
  }
}
