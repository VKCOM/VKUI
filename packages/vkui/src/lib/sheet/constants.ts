/** @public */
export const BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE_KEY = 'data-vkui-block-sheet-behavior';

/** @public */
export const BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE = {
  [BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE_KEY]: true,
};

/** @private */
export const DRAG_THRESHOLDS = {
  DISTANCE_FOR_MOVING_START: 12 as const,
  VELOCITY: 500 as const,
};

/** @private */
export const SNAP_POINT_SAFE_RANGE = {
  LOWER: 25 as const,
  HIGHEST: 90 as const,
};

/** @private */
export const SNAP_POINT_DETENTS = {
  MIN: 0 as const,
  MEDIUM: 50 as const,
  LARGE: 100 as const,
};

/** @private */
export const DYNAMIC_SNAP_POINT_DATA = {
  IDLE_POINT_VALUE: 0 as const,
  COMPUTED_INDEX: 1 as const,
};
