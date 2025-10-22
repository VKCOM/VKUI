/**
 * Генерируем класс для свойства с константным значением
 * @example .vkui-inline-size-inherit
 */
export function generateConstantClassName(prefix: string, value: string): string {
  return `vkui-${prefix}-${value}`;
}

/**
 * Генерируем класс для свойства со значением css-переменной
 * @example .vkui-inline-size
 */
export function generateVariableClassName(prefix: string): string {
  return `vkui-${prefix}`;
}

/**
 * Генерируем название кастомной css-переменной,
 * в которой будет храниться заданное пользователем значение
 * @example --vkui_internal--inline-size
 */
export function generateVariable(prefix: string): string {
  return `--vkui_internal--${prefix}`;
}
