import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Tappable from '../Tappable/Tappable';
import CellButton from '../CellButton/CellButton';
import { HasChildren, HasRootRef } from '../../types/props';
import usePlatform from '../../hooks/usePlatform';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement>, HasChildren, HasRootRef<HTMLElement> {
  /**
   * Значения `1`, `2`, `3`, `sell`, `buy` устарели. Маппинг на новые значения находится в
   * статическом методе `Button.mapOldLevel(level)`. Старые значения будут удалены в 3.0.0
   */
  level?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce' | 'destructive' | '1' | '2' | '3' | 'sell' | 'buy',
  size?: 'm' | 'l' | 'xl',
  /**
   * @deprecated Кнопки-ячейки `<Button type="cell" />` переехали в отдельный компонент: `<CellButton />`.
   * Свойство `type` будет удалено в 3.0.0
   */
  type?: 'default' | 'cell',
  align?: 'left' | 'center' | 'right',
  stretched?: boolean,
  before?: React.ReactNode,
  after?: React.ReactNode,
  component?: string | React.ComponentType,
  stopPropagation?: boolean
}

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

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const platform = usePlatform();
  if (props.type === 'cell') {
    return <CellButton {...props} level={props.level === 'destructive' ? 'danger' : 'primary'}/>;
  } else {
    const { className, size, level, stretched, align, children, before, after, type, getRootRef, ...restProps } = props;

    return <Tappable {...restProps} className={classNames(getClassName('Button', platform), className, {
      [`Button--sz-${size}`]: true,
      [`Button--lvl-${mapOldLevel(level)}`]: true,
      [`Button--aln-${align || 'center'}`]: true,
      [`Button--str`]: stretched
    })} getRootRef={getRootRef}>
      <div className="Button__in">
        {before && <div className="Button__before">{before}</div>}
        {children && <div className="Button__content">{children}</div>}
        {after && <div className="Button__after">{after}</div>}
      </div>
    </Tappable>;
  }
};

Button.defaultProps = {
  level: 'primary',
  type: 'default',
  component: 'button',
  size: 'm',
  stretched: false,
  stopPropagation: true
};

export default Button;
