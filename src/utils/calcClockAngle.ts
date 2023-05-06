function calcClockAngle(hour: number, minute: number): number | null {
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null;

  const angle = Math.abs(0.5 * (60 * hour - 11 * minute));

  return angle > 180 ? 360 - angle : angle;
}

export default calcClockAngle;
