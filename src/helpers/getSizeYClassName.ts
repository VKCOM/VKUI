import { SizeType } from "../lib/adaptivity";

type SizeYType = SizeType | "none";

export function getSizeYClassName(base: string, sizeY?: SizeYType): string;
export function getSizeYClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  sizeY?: SizeYType,
  styles?: Styles
): string | undefined;
export function getSizeYClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  sizeY: SizeYType = "none",
  /**
   * Note: ввиду того, что Typescript не поддерживает `typescript-plugin-css-modules` во время компиляции,
   *  не удалось покрыть дженерик типом параметр `styles`. Поэтому может вернуться undefined.
   */
  styles?: Styles
): string | undefined {
  const sizeYClassName = `${String(base)}--sizeY-${sizeY}`;
  return styles ? styles[sizeYClassName] : sizeYClassName;
}
