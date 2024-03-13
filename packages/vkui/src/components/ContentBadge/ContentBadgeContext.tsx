import * as React from 'react';
import type { ContentBadgeSizeType } from './types';

/**
 * Контекст для внутреннего использовния.
 * @private
 */
export const ContentBadgeContext = React.createContext<{
  isSingleChild: boolean;
  size: ContentBadgeSizeType;
}>({
  isSingleChild: false,
  size: 'm',
});
