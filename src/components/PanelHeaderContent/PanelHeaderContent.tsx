import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import Caption from '../Typography/Caption/Caption';
import Headline from '../Typography/Headline/Headline';
import { IOS } from '../../lib/platform';
import './PanelHeaderContent.css';

export interface PanelHeaderContentProps extends React.HTMLAttributes<HTMLDivElement> {
  aside?: React.ReactNode;
  before?: React.ReactNode;
  status?: React.ReactNode;
}

const PanelHeaderContent: React.FunctionComponent<PanelHeaderContentProps> = ({
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
    <div {...rootProps} vkuiClass={baseClassNames} style={style} className={className}>
      {hasReactNode(before) && <div vkuiClass="PanelHeaderContent__before">{before}</div>}
      <InComponent
        {...inProps}
        vkuiClass="PanelHeaderContent__in"
      >
        {hasReactNode(status) &&
          <Caption level="1" weight="regular" vkuiClass="PanelHeaderContent__status">
            {status}
          </Caption>
        }
        <div vkuiClass="PanelHeaderContent__children">
          {hasReactNode(status)
            ? <Headline vkuiClass="PanelHeaderContent__children-in" Component="span" weight="medium">
              {children}
            </Headline>
            : <span vkuiClass="PanelHeaderContent__children-in">{children}</span>
          }
          {hasReactNode(aside) && <div vkuiClass="PanelHeaderContent__aside">{aside}</div>}
        </div>
        {hasReactNode(before) && <div vkuiClass="PanelHeaderContent__width" />}
      </InComponent>
    </div>
  );
};

export default PanelHeaderContent;
