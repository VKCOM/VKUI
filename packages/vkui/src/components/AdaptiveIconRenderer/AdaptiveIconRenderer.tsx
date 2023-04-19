import * as React from 'react';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';

export interface AdaptiveIconRendererProps {
  IconCompact: React.ComponentType<{ className?: string }>;
  IconRegular: React.ComponentType<{ className?: string }>;
}

/**
 * @since 5.4.0
 * @see https://vkcom.github.io/VKUI/#/AdaptiveIconRenderer
 */
export const AdaptiveIconRenderer = ({ IconCompact, IconRegular }: AdaptiveIconRendererProps) => {
  const { sizeY } = useAdaptivityConditionalRender();

  return (
    <React.Fragment>
      {sizeY.compact && <IconCompact className={sizeY.compact.className} />}
      {sizeY.regular && <IconRegular className={sizeY.regular.className} />}
    </React.Fragment>
  );
};
