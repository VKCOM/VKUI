import styles from '../../styles/adaptivity.module.css';

export const sizeXCompactClassNames: Record<'mq' | 'compact', { className: string }> = {
  mq: { className: styles['-sizeX--compact-mq'] },
  compact: { className: styles['-sizeX--compact-forced'] },
};

export const sizeXRegularClassNames: Record<'mq' | 'regular', { className: string }> = {
  mq: { className: styles['-sizeX--regular-mq'] },
  regular: { className: styles['-sizeX--regular-forced'] },
};

export const sizeYCompactClassNames: Record<'mq' | 'compact', { className: string }> = {
  mq: { className: styles['-sizeY--compact-mq'] },
  compact: { className: styles['-sizeY--compact-forced'] },
};

export const sizeYRegularClassNames: Record<'mq' | 'regular', { className: string }> = {
  mq: { className: styles['-sizeY--regular-mq'] },
  regular: { className: styles['-sizeY--regular-forced'] },
};

export const viewWidthClassNames: Record<
  'tabletMinus' | 'tabletPlus',
  Record<'mq' | 'forced', { className: string }>
> = {
  tabletMinus: {
    mq: { className: styles['-viewWidth--tabletMinus-mq'] },
    forced: { className: styles['-viewWidth--tabletMinus-forced'] },
  },
  tabletPlus: {
    mq: { className: styles['-viewWidth--tabletPlus-mq'] },
    forced: { className: styles['-viewWidth--tabletPlus-forced'] },
  },
};

export const deviceTypeClassNames: Record<
  'mobile' | 'desktop',
  Record<'mq' | 'forced', { className: string }>
> = {
  mobile: {
    mq: { className: styles['-deviceType--mobile-mq'] },
    forced: { className: styles['-deviceType--mobile-forced'] },
  },
  desktop: {
    mq: { className: styles['-deviceType--desktop-mq'] },
    forced: { className: styles['-deviceType--desktop-forced'] },
  },
};
