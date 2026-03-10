import browserslistrc from '../../../.browserslistrc?raw';

const list = Object.fromEntries(
  Array.from(browserslistrc.matchAll(/(\w+) >= (\d+)/g), (m) => [m[1], m[2]] as const),
);

export const Chrome = () => list['Chrome'];
export const Firefox = () => list['Firefox'];
export const Safari = () => list['Safari'];
