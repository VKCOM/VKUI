import { WarnOnceHandler } from './warnOnce';

export interface NavIdProps {
  /** Уникальный идентификатор навигационного элемента (вместо id) */
  nav?: string;
  id?: string;
}

export function getNavId(props: NavIdProps, warn?: WarnOnceHandler) {
  const id = props.nav || props.id;
  if (process.env.NODE_ENV === 'development' && !id && warn) {
    warn('Навигационный элемент должен иметь свойство "nav" или "id"', 'error');
  }
  return id;
}
