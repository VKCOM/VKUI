import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames.js';
import Spinner24 from '@vkontakte/icons/dist/24/spinner';
import Spinner32 from '@vkontakte/icons/dist/32/spinner';
import Spinner44 from '@vkontakte/icons/dist/44/spinner';
import Spinner16 from '@vkontakte/icons/dist/16/spinner';

const baseClassNames = getClassName('Spinner');

export default class Spinner extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
    size: PropTypes.oneOf(['small', 'regular', 'large', 'medium']),
    className: PropTypes.string
  };

  static defaultProps = {
    on: true,
    progress: null,
    size: 'regular'
  };

  get svgSpinner () {
    switch (this.props.size) {
      case 'large':
        return <Spinner44 className="Spinner__self" />;
      case 'medium':
        return <Spinner32 className="Spinner__self" />;
      case 'small':
        return <Spinner16 className="Spinner__self" />;
      default:
        return <Spinner24 className="Spinner__self" />;
    }
  }

  render () {
    const { className, size, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={classnames(baseClassNames, className)}
      >
        {this.svgSpinner}
      </div>
    );
  }
}
