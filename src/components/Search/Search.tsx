import React from 'react';
import PropTypes from 'prop-types';
import { IS_PLATFORM_IOS } from '../../lib/platform';
import SearchIOS from '../SearchIOS/SearchIOS';
import SearchAndroid from '../SearchAndroid/SearchAndroid';
import { HasClassName } from '../../types/props';

export interface SearchProps extends HasClassName {
  after?: React.ReactNode;
  autoComplete?: string;
  autoFocus?: boolean;
  before?: React.ReactNode;
  getRef?: (instance: HTMLInputElement) => void;
  onChange?: () => void;
  onClose?: () => void;
  theme?: 'header' | 'default';
}

export default class Search extends React.Component<SearchProps> {
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
     * Android only. Определяет, будет ли установлен фокус в поле поиска.
     */
    autoFocus: PropTypes.bool,

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
    const { onClose, autoFocus, ...iosProps } = this.props;
    const { after, before, ...androidProps } = this.props;

    if (IS_PLATFORM_IOS) {
      return <SearchIOS {...iosProps} />;
    } else {
      return <SearchAndroid {...androidProps} />;
    }
  }
}
