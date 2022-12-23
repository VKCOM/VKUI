type HoverType = 'none' | 'has' | 'has-not';

export function getHoverClassName(base: string, hover?: boolean): string;
export function getHoverClassName<Styles extends Record<string, string>>(
  base: string,
  hover?: boolean,
  styles?: Styles,
): string | undefined;
export function getHoverClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  hover?: boolean,
  /**
   * Note: ввиду того, что Typescript не поддерживает `typescript-plugin-css-modules` во время компиляции,
   *  не удалось покрыть дженерик типом параметр `styles`. Поэтому может вернуться undefined.
   */
  styles?: Styles,
): string | undefined {
  let hoverState: HoverType = 'none';
  if (hover === true) {
    hoverState = 'has';
  } else if (hover === false) {
    hoverState = 'has-not';
  }

  const hoverClassName = `${String(base)}--hover-${hoverState}`;

  return styles ? styles[hoverClassName] : hoverClassName;
}
