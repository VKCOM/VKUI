import React from 'react';
import { platform, IOS } from '../../lib/platform';
import SearchIOS from '../SearchIOS/SearchIOS';
import SearchAndroid from '../SearchAndroid/SearchAndroid';
import PropTypes from 'prop-types';

const osname = platform();

export default class Search extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    getRef: PropTypes.func,

    /**
     * iOS only
     */
    after: PropTypes.node,
    /**
     * iOS only
     */
    before: PropTypes.node,
    /**
     * iOS only
     */
    theme: PropTypes.oneOf(['header', 'default']),

    /**
     * Android only. Вызывается при клике по стрелку (слева). Этот контрол служит для выхода из режима поиска.
     */
    onClose: PropTypes.func
  };

  render () {
    const { onClose, ...iosProps } = this.props;
    const { after, before, theme, ...androidProps } = this.props;
    if (osname === IOS) {
      return <SearchIOS {...iosProps} />;
    } else {
      return <SearchAndroid {...androidProps} />;
    }
  }
}
