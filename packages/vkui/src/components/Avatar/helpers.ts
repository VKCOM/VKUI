import type { ImageBaseSize } from '../ImageBase/ImageBase';

const MAX_FONT_SIZE = 30;
const MAX_IMAGE_BASE_SIZE: ImageBaseSize = 96;
const RELATIVE_SIZE = MAX_FONT_SIZE / MAX_IMAGE_BASE_SIZE;

/**
 * По возможности выставляем размеры по дизайн-системе. Иначе высчитываем.
 */
export function getInitialsFontSize(avatarSize: number): number {
  if (avatarSize <= 16) {
    return 5;
  } else if (avatarSize <= 24) {
    return 8;
  } else if (avatarSize <= 32) {
    return 10;
  } else if (avatarSize <= 36) {
    return 13;
  } else if (avatarSize <= 44) {
    return 14;
  } else if (avatarSize <= 48) {
    return 17;
  } else if (avatarSize < 56) {
    return 18;
  } else if (avatarSize <= 64) {
    return 21;
  } else if (avatarSize <= 88) {
    return 26;
  } else if (avatarSize <= MAX_IMAGE_BASE_SIZE) {
    return MAX_FONT_SIZE;
  }

  const calculatedFontSize = Math.ceil(avatarSize * RELATIVE_SIZE);
  const evenFix = calculatedFontSize % 2;
  return calculatedFontSize + evenFix;
}
