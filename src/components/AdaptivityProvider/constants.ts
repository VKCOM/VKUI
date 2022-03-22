/**
 * # Брейкпоинты
 */
export const DESKTOP_SIZE = 1280;

export const TABLET_SIZE = 1024;

export const SMALL_TABLET_SIZE = 768;

export const MOBILE_SIZE = 320;

export const MOBILE_LANDSCAPE_HEIGHT = 414;

export const MEDIUM_HEIGHT = 720;

/**
 * # Медиа выражения
 */
export const MQ_DESKTOP_ONLY = `(min-width: ${DESKTOP_SIZE}px)`;

export const MQ_TABLET_ONLY = `(min-width: ${TABLET_SIZE}px) and (max-width: ${
  DESKTOP_SIZE - 1
}px)`;

export const MQ_SMALL_TABLET_ONLY = `(min-width: ${SMALL_TABLET_SIZE}px) and (max-width: ${
  TABLET_SIZE - 1
}px)`;

export const MQ_MOBILE_ONLY = `(min-width: ${MOBILE_SIZE}px) and (max-width: ${
  SMALL_TABLET_SIZE - 1
}px)`;

export const MQ_MEDIUM_HEIGHT = `(min-height: ${MEDIUM_HEIGHT}px)`;

export const MQ_MOBILE_LANDSCAPE_HEIGHT = `(min-height: ${
  MOBILE_LANDSCAPE_HEIGHT + 1
}px) and (orientation: landscape)`;
