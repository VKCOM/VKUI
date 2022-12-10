import { canUseDOM } from './dom';

// eslint-disable-next-line no-restricted-globals
export const isTesting = Boolean(canUseDOM && (window as any).__isVkuiTesting);
