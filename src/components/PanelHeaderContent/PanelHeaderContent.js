import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID } from '../../lib/platform';
import Tappable from '../Tappable/Tappable';

const osname = platform();
const baseClassNames = getClassName('PanelHeaderContent');

const PanelHeaderContent = ({ className, style, aside, status, before, children, onClick, ...restProps }) => {
  const InComponent = onClick ? Tappable : 'div';
  const rootProps = onClick ? {} : restProps;
  const inProps = onClick ? { ...restProps, activeEffectDelay: 200 } : {};

  return (
    <div {...rootProps} className={classnames(baseClassNames, className)} style={style}>
      {osname === ANDROID && before && <div className="PanelHeaderContent__before">{before}</div>}
      <InComponent {...inProps} className="PanelHeaderContent__in" onClick={onClick}>
        {status && <div className="PanelHeaderContent__status">{status}</div>}
        <div className="PanelHeaderContent__children">
          <span>{children}</span>
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
