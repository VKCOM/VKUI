export function getPageAriaLabelDefault(page: number, isCurrent: boolean): string {
  return isCurrent ? `${page} страница` : `Перейти на ${page} страницу`;
}
