import * as React from 'react';
import type { ContentBadgeSizeType } from './types';

type ContentBadgeContextValue = {
  isSingleChild: boolean;
  size: ContentBadgeSizeType;
};

/**
 * Контекст для внутреннего использовния.
 * @private
 */
export const ContentBadgeContext: React.Context<ContentBadgeContextValue> =
  React.createContext<ContentBadgeContextValue>({
    isSingleChild: false,
    size: 'm',
  });
