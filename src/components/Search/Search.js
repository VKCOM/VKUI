import React from 'react';
import { platform, IOS } from '../../lib/platform';
import SearchIOS from '../SearchIOS/SearchIOS';
import SearchAndroid from '../SearchAndroid/SearchAndroid';
import PropTypes from 'prop-types';

const osname = platform();

export default class Search extends React.Component {
  static propTypes = {
    onClose: PropTypes.func,
    after: PropTypes.node,
    before: PropTypes.node,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.node,
    theme: PropTypes.oneOf(['header', 'default']),
    getRef: PropTypes.func
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
