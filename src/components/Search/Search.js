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
     * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
     */
    after: PropTypes.node,
    /**
     * iOS only
     */
    before: PropTypes.node,
    theme: PropTypes.oneOf(['header', 'default']),

    /**
     * Android only. Вызывается при клике по стрелке (слева). Этот контрол служит для выхода из режима поиска.
     */
    onClose: PropTypes.func,

    /**
     * **Важно:** в коллбэк первым аргументом прилетает *значение* текстового поля.
     * Объект события передается вторым аргументом.
     */
    onChange: PropTypes.func,
    autoComplete: PropTypes.string
  };

  static defaultProps = {
    theme: 'default',
    autoComplete: 'off'
  };

  render () {
    const { onClose, ...iosProps } = this.props;
    const { after, before, ...androidProps } = this.props;
    if (osname === IOS) {
      return <SearchIOS {...iosProps} />;
    } else {
      return <SearchAndroid {...androidProps} />;
    }
  }
}
