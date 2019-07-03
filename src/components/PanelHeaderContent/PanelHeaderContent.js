import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';
import Tappable from '../Tappable/Tappable';

const baseClassNames = getClassName('PanelHeaderContent');

const PanelHeaderContent = ({ className, style, aside, status, before, children, onClick, ...restProps }) => {
  const InComponent = onClick ? Tappable : 'div';
  const rootProps = onClick ? {} : restProps;
  const inProps = onClick ? { ...restProps, activeEffectDelay: 200 } : {};

  return (
    <div {...rootProps} className={classNames(baseClassNames, className)} style={style}>
      {IS_PLATFORM_ANDROID && before && <div className="PanelHeaderContent__before">{before}</div>}
      <InComponent {...inProps} className="PanelHeaderContent__in" onClick={onClick}>
        {status && <div className="PanelHeaderContent__status">{status}</div>}
        <div className="PanelHeaderContent__children">
          <span className="PanelHeaderContent__children-in">{children}</span>
          {aside && <div className="PanelHeaderContent__aside">{aside}</div>}
        </div>
      </InComponent>
    </div>
  );
};

PanelHeaderContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  aside: PropTypes.node,
  status: PropTypes.node,
  onClick: PropTypes.func,
  /**
   * Android only
   */
  before: PropTypes.node
};

export default PanelHeaderContent;
