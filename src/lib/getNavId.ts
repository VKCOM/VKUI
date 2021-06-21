export interface NavIdProps {
  /** Уникальный идентификатор навигационного элемента (вместо id) */
  nav?: string;
  id?: string;
}

export function getNavId(props: NavIdProps, warn?: (text: string) => any) {
  const id = props.nav || props.id;
  if (!id && warn) {
    warn('[VKUI] Navigation item should have "nav" or "id" prop');
  }
  return id;
}
