import * as React from 'react';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';

export interface AdaptiveIconRendererProps {
  IconCompact: React.ComponentType<{ className?: string }>;
  IconRegular: React.ComponentType<{ className?: string }>;
}

export const AdaptiveIconRenderer = ({ IconCompact, IconRegular }: AdaptiveIconRendererProps) => {
  const { sizeY } = useAdaptivityConditionalRender();

  return (
    <React.Fragment>
      {sizeY.compact && <IconCompact className={sizeY.compact.className} />}
      {sizeY.regular && <IconRegular className={sizeY.regular.className} />}
    </React.Fragment>
  );
};
