/**
 * Генерируем класс для свойства с константным значением
 * @example .vkui-inline-size-inherit (без брейкпоинта)
 * @example .vkui-init-inline-size-inherit (с брейкпоинтом)
 */
export function generateConstantClassName(
  prefix: string,
  value: string,
  breakpoint?: string,
): string {
  const bp = breakpoint ? `${breakpoint}-` : '';
  return `vkui-${bp}${prefix}-${value}`;
}

/**
 * Генерируем класс для свойства со значением css-переменной
 * @example .vkui-inline-size (без брейкпоинта)
 * @example .vkui-init-inline-size (с брейкпоинтом)
 */
export function generateVariableClassName(prefix: string, breakpoint?: string): string {
  const bp = breakpoint ? `${breakpoint}-` : '';
  return `vkui-${bp}${prefix}`;
}

/**
 * Генерируем название кастомной css-переменной,
 * в которой будет храниться заданное пользователем значение
 * @example --vkui_internal--inline-size (без брейкпоинта)
 * @example --vkui_internal--init-inline-size (с брейкпоинтом)
 */
export function generateVariable(prefix: string, breakpoint?: string): string {
  const bp = breakpoint ? `${breakpoint}-` : '';
  return `--vkui_internal--${bp}${prefix}`;
}
