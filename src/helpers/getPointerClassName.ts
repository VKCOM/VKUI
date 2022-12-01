type MouseType = "none" | "has" | "has-not";

export function getPointerClassName(base: string, mouse?: boolean): string;
export function getPointerClassName<Styles extends Record<string, string>>(
  base: string,
  mouse?: boolean,
  styles?: Styles
): string | undefined;
export function getPointerClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  mouse?: boolean,
  /**
   * Note: ввиду того, что Typescript не поддерживает `typescript-plugin-css-modules` во время компиляции,
   *  не удалось покрыть дженерик типом параметр `styles`. Поэтому может вернуться undefined.
   */
  styles?: Styles
): string | undefined {
  let mouseState: MouseType = "none";
  if (mouse === true) {
    mouseState = "has";
  } else if (mouse === false) {
    mouseState = "has-not";
  }

  const className = `${String(base)}--pointer-${mouseState}`;

  return styles ? styles[className] : className;
}
