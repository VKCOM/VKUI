import { SizeType } from "../lib/adaptivity";

type SizeXType = SizeType | "none";

export function getSizeXClassName(base: string, sizeX?: SizeXType): string;
export function getSizeXClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  sizeX?: SizeXType,
  styles?: Styles
): string | undefined;
export function getSizeXClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  sizeX: SizeXType = "none",
  /**
   * Note: ввиду того, что Typescript не поддерживает `typescript-plugin-css-modules` во время компиляции,
   *  не удалось покрыть дженерик типом параметр `styles`. Поэтому может вернуться undefined.
   */
  styles?: Styles
): string | undefined {
  const sizeXClassName = `${String(base)}--sizeX-${sizeX}`;
  return styles ? styles[sizeXClassName] : sizeXClassName;
}
