export const createCalendarTimezoneField = () => {
  return {
    control: 'select' as const,
    options: [
      'None',
      'America/New_York',
      'Europe/London',
      'Europe/Paris',
      'Asia/Tokyo',
      'Australia/Sydney',
      'Pacific/Auckland',
      'Asia/Dubai',
      'America/Los_Angeles',
      'Asia/Shanghai',
      'Europe/Moscow',
    ],
    mapping: {
      'None': undefined,
      'America/New_York': 'America/New_York',
      'Europe/London': 'Europe/London',
      'Europe/Paris': 'Europe/Paris',
      'Asia/Tokyo': 'Asia/Tokyo',
      'Australia/Sydney': 'Australia/Sydney',
      'Pacific/Auckland': 'Pacific/Auckland',
      'Asia/Dubai': 'Asia/Dubai',
      'America/Los_Angeles': 'America/Los_Angeles',
      'Asia/Shanghai': 'Asia/Shanghai',
      'Europe/Moscow': 'Europe/Moscow',
    },
  };
};
