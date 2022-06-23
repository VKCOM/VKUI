import { ViewWidth } from "../components/AdaptivityProvider/AdaptivityContext";

export function getViewWidthClassName(
  base: string,
  viewWidth?: ViewWidth
): string;
export function getViewWidthClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  viewWidth?: ViewWidth,
  styles?: Styles
): string | undefined;
export function getViewWidthClassName<Styles extends Record<string, string>>(
  base: keyof Styles,
  viewWidth?: ViewWidth,
  /**
   * Note: ввиду того, что Typescript не поддерживает `typescript-plugin-css-modules` во время компиляции,
   *  не удалось покрыть дженерик типом параметр `styles`. Поэтому может вернуться undefined.
   */
  styles?: Styles
): string | undefined {
  let className = `${base}--viewWidth-`;

  switch (viewWidth) {
    case ViewWidth.SMALL_MOBILE:
      className += "smallMobile";
      break;
    case ViewWidth.MOBILE:
      className += "mobile";
      break;
    case ViewWidth.SMALL_TABLET:
      className += "smallTablet";
      break;
    case ViewWidth.TABLET:
      className += "tablet";
      break;
    case ViewWidth.DESKTOP:
      className += "desktop";
      break;

    default:
      className += "none";
      break;
  }

  className = styles ? styles[className] : className;

  if (viewWidth && viewWidth >= ViewWidth.SMALL_TABLET) {
    if (styles) {
      className += " " + styles[`${base}--viewWidth-smallTabletPlus`];
    } else {
      className += ` ${base}--viewWidth-smallTabletPlus`;
    }
  }

  return className;
}
