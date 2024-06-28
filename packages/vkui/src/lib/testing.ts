import { canUseDOM } from './dom';

// eslint-disable-next-line no-restricted-globals, @typescript-eslint/no-inferrable-types
export const isTesting: boolean = Boolean(canUseDOM && (window as any).__isVkuiTesting);
