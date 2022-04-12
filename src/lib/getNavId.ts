import { WarnOnceHandler } from "./warnOnce";

export interface NavIdProps {
  /** Уникальный идентификатор навигационного элемента (вместо id) */
  nav?: string;
  id?: string;
}

export function getNavId(props: NavIdProps, warn?: WarnOnceHandler) {
  const id = props.nav || props.id;
  if (process.env.NODE_ENV === "development" && !id && warn) {
    warn('Navigation item should have "nav" or "id" prop', "error");
  }
  return id;
}
