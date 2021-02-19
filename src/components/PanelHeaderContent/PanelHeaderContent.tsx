import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import Caption from '../Typography/Caption/Caption';
import Headline from '../Typography/Headline/Headline';
import { IOS } from '../..';

export interface PanelHeaderContentProps extends HTMLAttributes<HTMLDivElement> {
  aside?: ReactNode;
  before?: ReactNode;
  status?: ReactNode;
}

const PanelHeaderContent: FunctionComponent<PanelHeaderContentProps> = ({
  className,
  style,
  aside,
  status,
  before,
  children,
  onClick,
  ...restProps
}: PanelHeaderContentProps) => {
  const InComponent = onClick ? Tappable : 'div';
  const rootProps = onClick ? {} : restProps;
  const platform = usePlatform();
  const inProps = onClick ? {
    ...restProps,
    onClick,
    activeEffectDelay: 200,
    hasActive: platform === IOS,
    activeMode: 'opacity',
  } : {};
  const baseClassNames = getClassName('PanelHeaderContent', platform);

  return (
    <div {...rootProps} className={classNames(baseClassNames, className)} style={style}>
      {hasReactNode(before) && <div className="PanelHeaderContent__before">{before}</div>}
      <InComponent
        {...inProps}
        className="PanelHeaderContent__in"
      >
        {hasReactNode(status) &&
          <Caption level="1" weight="regular" className="PanelHeaderContent__status">
            {status}
          </Caption>
        }
        <div className="PanelHeaderContent__children">
          {hasReactNode(status) ?
            <Headline Component="span" weight="medium">
              {children}
            </Headline>
            : <span className="PanelHeaderContent__children-in">{children}</span>
          }
          {hasReactNode(aside) && <div className="PanelHeaderContent__aside">{aside}</div>}
        </div>
        {hasReactNode(before) && <div className="PanelHeaderContent__width" />}
      </InComponent>
    </div>
  );
};

export default PanelHeaderContent;
