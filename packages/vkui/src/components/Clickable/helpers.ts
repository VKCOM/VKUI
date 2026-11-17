import type { ClickableProps } from './Clickable';

/**
 * Проверяем, является ли компонент кликабельным.
 */
export function checkClickable<T>(props: ClickableProps<T>): boolean {
  return (
    (props.href !== undefined ||
      props.onClick !== undefined ||
      props.onClickCapture !== undefined ||
      props.Component === 'a' ||
      props.Component === 'button' ||
      props.Component === 'label' ||
      props.Component === 'input') &&
    !props.disabled
  );
}
