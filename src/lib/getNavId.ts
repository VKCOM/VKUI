export interface NavIdProps {
  /** Уникальный идентификатор навигационного элемента (вместо id) */
  nav?: string;
  id?: string;
}

export function getNavId(props: NavIdProps, strict = true) {
  const id = props.nav || props.id;
  if (!id && strict) {
    console.error('[VKUI] Navigation item should have "nav" or "id" prop');
  }
  return id;
}
