import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { Touch } from '../Touch/Touch';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { HasRootRef } from '../../types';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { PanelContext, PanelContextProps } from './PanelContext';
import { IOS } from '../../lib/platform';
import { usePlatform } from '../../hooks/usePlatform';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { warnOnce } from '../../lib/warnOnce';
import './Panel.css';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement>,
  HasRootRef<HTMLDivElement>, AdaptivityProps, NavIdProps {
  centered?: boolean;
}

const warn = warnOnce('Panel');
const PanelComponent: React.FC<PanelProps> = (props: PanelProps) => {
  const { centered, children, getRootRef, sizeX, nav, ...restProps } = props;

  const platform = usePlatform();

  const childContext = useObjectMemo<PanelContextProps>({
    panel: getNavId(props, warn),
  });

  return (
    <PanelContext.Provider value={childContext}>
      <div
        {...restProps}
        ref={getRootRef}
        vkuiClass={classNames(getClassName('Panel', platform), `Panel--${sizeX}`, {
          'Panel--centered': centered,
          [`Panel--sizeX-${sizeX}`]: true,
        })}
      >
        <Touch Component={TooltipContainer} vkuiClass="Panel__in">
          {platform === IOS && <div vkuiClass="Panel__fade" />}
          <div vkuiClass="Panel__in-before" />
          {centered ? <div vkuiClass="Panel__centered">{children}</div> : children}
          <div vkuiClass="Panel__in-after" />
        </Touch>
      </div>
    </PanelContext.Provider>
  );
};

PanelComponent.displayName = 'Panel';

PanelComponent.defaultProps = {
  children: '',
  centered: false,
};

export const Panel = withAdaptivity(PanelComponent, {
  sizeX: true,
});
