import { PlatformType, platform } from "../lib/platform";

/**
 * @deprecated Используйте getPlatformClassName().
 *  Пример, `classNamesString("Component", getPlatformClassName("Component", platform))`.
 */
export function getClassName(
  base: string,
  osname: PlatformType = platform()
): string {
  return `${base} ${base}--${osname}`;
}
