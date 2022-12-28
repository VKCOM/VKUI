import { SizeType } from '../../lib/adaptivity';
import styles from '../../styles/adaptivity.module.css';

export const sizeXCompactClassNames = {
  mq: { className: styles['-sizeX--compact-mq'] },
  [SizeType.COMPACT]: { className: styles['-sizeX--compact-forced'] },
};

export const sizeXRegularClassNames = {
  mq: { className: styles['-sizeX--regular-mq'] },
  [SizeType.REGULAR]: { className: styles['-sizeX--regular-forced'] },
};

export const sizeYCompactClassNames = {
  mq: { className: styles['-sizeY--compact-mq'] },
  [SizeType.COMPACT]: { className: styles['-sizeY--compact-forced'] },
};

export const sizeYRegularClassNames = {
  mq: { className: styles['-sizeY--regular-mq'] },
  [SizeType.REGULAR]: { className: styles['-sizeY--regular-forced'] },
};

export const viewWidthClassNames = {
  tabletMinus: {
    mq: { className: styles['-viewWidth--tabletMinus-mq'] },
    forced: { className: styles['-viewWidth--tabletMinus-forced'] },
  },
  tabletPlus: {
    mq: { className: styles['-viewWidth--tabletPlus-mq'] },
    forced: { className: styles['-viewWidth--tabletPlus-forced'] },
  },
};

export const deviceTypeClassNames = {
  mobile: {
    mq: { className: styles['-deviceType--mobile-mq'] },
    forced: { className: styles['-deviceType--mobile-forced'] },
  },
  desktop: {
    mq: { className: styles['-deviceType--desktop-mq'] },
    forced: { className: styles['-deviceType--desktop-forced'] },
  },
};
