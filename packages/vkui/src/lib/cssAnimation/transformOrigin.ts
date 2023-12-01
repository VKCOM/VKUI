import type { Placement } from '../floating';
import styles from '../../styles/transformOriginByPlacement.module.css'; // eslint-disable-line import/order

export const transformOriginClassNames: Record<Placement, string> = {
  'top': styles['-anim-transform-origin-top'],
  'top-start': styles['-anim-transform-origin-top-start'],
  'top-end': styles['-anim-transform-origin-top-end'],
  'right': styles['-anim-transform-origin-right'],
  'right-start': styles['-anim-transform-origin-right-start'],
  'right-end': styles['-anim-transform-origin-right-end'],
  'bottom': styles['-anim-transform-origin-bottom'],
  'bottom-start': styles['-anim-transform-origin-bottom-start'],
  'bottom-end': styles['-anim-transform-origin-bottom-end'],
  'left': styles['-anim-transform-origin-left'],
  'left-start': styles['-anim-transform-origin-left-start'],
  'left-end': styles['-anim-transform-origin-left-end'],
};
