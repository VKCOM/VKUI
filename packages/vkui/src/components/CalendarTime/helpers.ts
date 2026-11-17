export function padStartTimeValue(value: Pick<string, 'toString'>): string {
  return value.toString().padStart(2, '0');
}
