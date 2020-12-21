import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import usePlatform from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';

interface PanelHeaderContentProps extends HTMLAttributes<HTMLDivElement> {
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
  const inProps = onClick ? { ...restProps, activeEffectDelay: 200 } : {};
  const platform = usePlatform();
  const baseClassNames = getClassName('PanelHeaderContent', platform);

  return (
    <div {...rootProps} className={classNames(baseClassNames, className)} style={style}>
      {hasReactNode(before) && <div className="PanelHeaderContent__before">{before}</div>}
      <InComponent {...inProps} className="PanelHeaderContent__in" onClick={onClick}>
        {hasReactNode(status) && <div className="PanelHeaderContent__status">{status}</div>}
        <div className="PanelHeaderContent__children">
          <span className="PanelHeaderContent__children-in">{children}</span>
          {hasReactNode(aside) && <div className="PanelHeaderContent__aside">{aside}</div>}
        </div>
        {hasReactNode(before) && <div className="PanelHeaderContent__width" />}
      </InComponent>
    </div>
  );
};

export default PanelHeaderContent;
