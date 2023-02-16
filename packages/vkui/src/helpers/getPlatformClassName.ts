import { platform, PlatformType } from '../lib/platform';

export function getPlatformClassName(base: string, osname?: PlatformType): string;
export function getPlatformClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  osname?: PlatformType,
  styles?: Styles,
): string | undefined;
export function getPlatformClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  osname: PlatformType = platform(),
  /**
   * Note: ввиду того, что Typescript не поддерживает `typescript-plugin-css-modules` во время компиляции,
   *  не удалось покрыть дженерик типом параметр `styles`. Поэтому может вернуться undefined.
   */
  styles?: Styles,
): string | undefined {
  const platformClassName = `${String(base)}--${osname}`;
  return styles ? styles[platformClassName] : platformClassName;
}
