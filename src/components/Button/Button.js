import React from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';

import CellButton from '../CellButton/CellButton';

const baseClassName = getClassName('Button');

export default class Button extends React.Component {
  static propTypes = {
    /**
     * Значения `1`, `2`, `3`, `sell`, `buy` устарели. Маппинг на новые значения находится в
     * статическом методе `Button.mapOldLevel(level)`. Старые значения будут удалены в
     * следующей мажлорной версии.
     */
    level: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'outline', 'commerce', '1', '2', '3', 'sell', 'buy']),
    size: PropTypes.oneOf(['m', 'l', 'xl']),
    /**
     * @deprecated Кнопки-ячейки `<Button type="cell" />` переехали в отдельный компонент: `<CellButton />`.
     * Свойство `type` будет удалено в следующей мажорной версии.
     */
    type: PropTypes.oneOf(['default', 'cell']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
    stretched: PropTypes.bool,
    before: PropTypes.node,
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.any
  };

  static mapOldLevel (level) {
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
  }

  static defaultProps = {
    level: 'primary',
    type: 'default',
    component: 'button',
    size: 'm',
    stretched: false
  };

  render () {
    if (this.props.type === 'cell') {
      const { stretched, size, ...restProps } = this.props;
      return <CellButton {...restProps} />;
    } else {
      const { className, size, level, stretched, align, children, before, ...restProps } = this.props;

      return <Tappable {...restProps} className={classnames(baseClassName, className, {
        [`Button--sz-${size}`]: true,
        [`Button--lvl-${Button.mapOldLevel(level)}`]: true,
        [`Button--aln-${align || 'center'}`]: true,
        [`Button--str`]: stretched
      })} stopPropagation>
        <div className="Button__in">
          {before && <div className="Button__before">{before}</div>}
          {children && <div className="Button__content">{children}</div>}
        </div>
      </Tappable>;
    }
  }
}
