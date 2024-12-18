export const BREAKPOINTS = {
  DESKTOP: 1250,
  TABLET: 500,
};

export const MEDIA_QUERIES = {
  '--view-mobile': `(max-width: ${BREAKPOINTS.TABLET - 0.1}px)`,
  '--view-tablet': `(min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.DESKTOP - 0.1}px)`,
  '--view-desktop': `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
};
