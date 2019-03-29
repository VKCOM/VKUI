import React from 'react';
import PropTypes from 'prop-types';
import FixedLayout from '../FixedLayout/FixedLayout';
import Tabs from '../Tabs/Tabs';
import { IS_PLATFORM_IOS } from '../../lib/platform';

/**
 * @deprecated Для отрисовки фиксированных табов используйте связку `Tabs` и `FixedLayout`.
 * Этот компонент устарел и будет удален в 3.0.0.
 */
export default class FixedTabs extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    vertical: PropTypes.oneOf(['top', 'bottom']),
    style: PropTypes.object,
    /**
     * Значения white и gray устарели. Они будут удалены в следующей мажорной версии.
     * Для Android актуален только header
     */
    theme: PropTypes.oneOf(['light', 'header']),
    /**
     * iOS only
     */
    type: PropTypes.oneOf(['default', 'buttons'])
  };

  static defaultProps = {
    theme: IS_PLATFORM_IOS ? 'light' : 'header',
    vertical: 'top'
  };

  render () {
    const { vertical, className, style, theme, children } = this.props;

    return (
      <FixedLayout vertical={vertical} className={className} style={style}>
        <Tabs theme={theme}>
          {children}
        </Tabs>
      </FixedLayout>
    );
  }
}
