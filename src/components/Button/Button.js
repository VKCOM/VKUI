import React from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';

import CellButton from '../CellButton/CellButton';

const baseClassName = getClassName('Button');

const mapOldLevel = level => {
  switch (level) {
    case '1':
      return 'primary';
    case '2':
      return 'secondary';
    case '3':
      return 'tertiary';
    case 'sell':
      return 'outline';
    case 'buy':
      return 'commerce';
    default:
      return level;
  }
};

const Button = props => {
  if (props.type === 'cell') {
    return <CellButton {...props} />;
  } else {
    const { className, size, level, stretched, align, children, before, after, type, ...restProps } = props;

    return <Tappable {...restProps} className={classNames(baseClassName, className, {
      [`Button--sz-${size}`]: true,
      [`Button--lvl-${mapOldLevel(level)}`]: true,
      [`Button--aln-${align || 'center'}`]: true,
      [`Button--str`]: stretched
    })} stopPropagation>
      <div className="Button__in">
        {before && <div className="Button__before">{before}</div>}
        {children && <div className="Button__content">{children}</div>}
        {after && <div className="Button__after">{after}</div>}
      </div>
    </Tappable>;
  }
};

Button.propTypes = {
  /**
   * Значения `1`, `2`, `3`, `sell`, `buy` устарели. Маппинг на новые значения находится в
   * статическом методе `Button.mapOldLevel(level)`. Старые значения будут удалены в 3.0.0
   */
  level: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'outline', 'commerce', 'destructive', '1', '2', '3', 'sell', 'buy']),
  size: PropTypes.oneOf(['m', 'l', 'xl']),
  /**
   * @deprecated Кнопки-ячейки `<Button type="cell" />` переехали в отдельный компонент: `<CellButton />`.
   * Свойство `type` будет удалено в 3.0.0
   */
  type: PropTypes.oneOf(['default', 'cell']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  stretched: PropTypes.bool,
  before: PropTypes.node,
  after: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.any
};

Button.defaultProps = {
  level: 'primary',
  type: 'default',
  component: 'button',
  size: 'm',
  stretched: false
};

export default Button;
