import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

@Controller('/rest/clock')
export class ClockController {
  @Get(':hour/:minute')
  @ApiParam({ name: 'hour', type: 'number' })
  @ApiParam({ name: 'minute', type: 'number' })
  getAngle(
    @Param('hour') hour: number,
    @Param('minute') minute?: number,
  ): { angle: number } {
    const hourAngle = (hour % 12) * 30 + minute / 2;
    const minuteAngle = minute * 6;
    const angle = Math.abs(hourAngle - minuteAngle);
    return { angle: Math.min(angle, 360 - angle) };
  }

  // @Get()
  // async findAll(): Promise<Clock[]> {
  //   return this.clocksService.findAll();
  // }

  // @Post()
  // async create(@Body() clock: Clock): Promise<Clock> {
  //   return this.clocksService.create(clock);
  // }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() clock: Clock): Promise<Clock> {
  //   return this.clocksService.update(+id, clock);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: string): Promise<void> {
  //   this.clocksService.delete(+id);
  // }
}
