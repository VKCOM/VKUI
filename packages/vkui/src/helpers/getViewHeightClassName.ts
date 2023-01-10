import { ViewHeight } from '../lib/adaptivity';

export function getViewHeightClassName(base: string, viewHeight?: ViewHeight): string;
export function getViewHeightClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  viewHeight?: ViewHeight,
  styles?: Styles,
): string | undefined;
export function getViewHeightClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  viewHeight?: ViewHeight,
  /**
   * Note: ввиду того, что Typescript не поддерживает `typescript-plugin-css-modules` во время компиляции,
   *  не удалось покрыть дженерик типом параметр `styles`. Поэтому может вернуться undefined.
   */
  styles?: Styles,
): string | undefined {
  let className = `${String(base)}--viewHeight-`;

  switch (viewHeight) {
    case ViewHeight.EXTRA_SMALL:
      className += 'extraSmall';
      break;
    case ViewHeight.SMALL:
      className += 'small';
      break;
    case ViewHeight.MEDIUM:
      className += 'medium';
      break;

    default:
      className += 'none';
      break;
  }

  return styles ? styles[className] : className;
}
