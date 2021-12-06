import { InitialsAvatarNumberGradients } from "../components/InitialsAvatar/InitialsAvatar";

/**
 * Вычисляет цвет InitialsAvatar на основании переданного идентификатора объекта
 */
export function calcInitialsAvatarColor(
  objectId: number
): InitialsAvatarNumberGradients {
  return ((objectId % 6) + 1) as InitialsAvatarNumberGradients;
}
