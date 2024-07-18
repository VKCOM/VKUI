export const isPerformanceMeasure = (data: any): data is PerformanceMeasure =>
  data !== null &&
  typeof data === 'object' &&
  data.hasOwnProperty('startTime') &&
  data.hasOwnProperty('duration');
