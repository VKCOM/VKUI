// eslint-disable-next-line no-restricted-globals
export const isTesting = Boolean(typeof window !== 'undefined' && (window as any).__isVkuiTesting);
