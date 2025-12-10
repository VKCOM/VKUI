'use client';

import * as React from 'react';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';

export interface AdaptiveIconRendererProps {
  /**
   * Компонент иконки для компактного размера.
   */
  IconCompact: React.ComponentType<{ className?: string }>;
  /**
   * Компонент иконки для обычного размера.
   */
  IconRegular: React.ComponentType<{ className?: string }>;
}

/**
 * @since 5.4.0
 * @see https://vkui.io/components/adaptive-icon-renderer
 */
export const AdaptiveIconRenderer = ({
  IconCompact,
  IconRegular,
}: AdaptiveIconRendererProps): React.ReactNode => {
  const { sizeY } = useAdaptivityConditionalRender();

  return (
    <React.Fragment>
      {sizeY.compact && <IconCompact className={sizeY.compact.className} />}
      {sizeY.regular && <IconRegular className={sizeY.regular.className} />}
    </React.Fragment>
  );
};
