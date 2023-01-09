import * as VKUI from '../packages/vkui/src';

const unstablePrefix = 'unstable_';

export const unstable = Object.keys(VKUI)
  .filter((name) => name.startsWith(unstablePrefix))
  .map((name) => name.replace(unstablePrefix, ''));
