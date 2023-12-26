import type { PlatformType } from '../platform';

/**
 * `string` – это CSS селектор.
 *
 * @example
 * ```ts
 * const tokensClassNames = {
 *  light: 'vkui--vkBase-light',
 *  dark: 'vkui--vkBase-dark',
 * }
 * ```
 */
export type TokensClassNamesByAppearances = {
  light?: string;
  dark?: string;
};

/**
 * @example
 * ```ts
 * const tokensClassNames = {
 *  android: {
 *   light: 'vkui--vkBase-light',
 *   dark: 'vkui--vkBase-dark',
 *  },
 *  // ...
 * };
 * ```
 */
export type TokensClassNamesByPlatforms = {
  [P in PlatformType]?: TokensClassNamesByAppearances;
};

export type TokensClassNames = TokensClassNamesByPlatforms | TokensClassNamesByAppearances;
