import type { Placement } from '../floating';
import styles from '../../styles/transformOriginByPlacement.module.css'; // eslint-disable-line import/order

export const transformOriginClassNames: Record<Placement, string> = {
  'top': styles.animTransformOriginTop,
  'top-start': styles.animTransformOriginTopStart,
  'top-end': styles.animTransformOriginTopEnd,
  'right': styles.animTransformOriginRight,
  'right-start': styles.animTransformOriginRightStart,
  'right-end': styles.animTransformOriginRightEnd,
  'bottom': styles.animTransformOriginBottom,
  'bottom-start': styles.animTransformOriginBottomStart,
  'bottom-end': styles.animTransformOriginBottomEnd,
  'left': styles.animTransformOriginLeft,
  'left-start': styles.animTransformOriginLeftStart,
  'left-end': styles.animTransformOriginLeftEnd,
};
