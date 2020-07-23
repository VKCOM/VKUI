import React, { ElementType, FC, HTMLAttributes, ReactNode } from 'react';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import getClassName from '../../helpers/getClassName';
import Text from '../Typography/Text/Text';
import Tappable from '../../components/Tappable/Tappable';
import { hasReactNode } from '../../lib/utils';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../components/AdaptivityProvider/AdaptivityContext';

export interface MiniInfoCellProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Иконка слева.<br />
   * Рекомендуется использовать иконки размера 20.
   */
  before: ReactNode;

  /**
   * Содержимое справа.<br />
   * `<UsersStack size="s" />` или `<Avatar size={24} />`
   */
  after?: ReactNode;

  multiline?: boolean;

  /**
   * Тип ячейки.
   *
   * - `base` – базовая ячейка с серой иконкой и серым текстом.<br />
   * В компонент можно передать `Link`, чтобы визуально сделать часть текста ссылкой.
   * - `add` – тип ячейки, который показывает, что взаимодействие с ней должно вызывать действие добавления чего-то.
   * - `more` – взаимодействие с такой ячейкой должно открывать какую-то подробную информацию.
   */
  mode?: 'base' | 'add' | 'more';
}

export const MiniInfoCell: FC<MiniInfoCellProps> = (props) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();
  const { before, after, mode, multiline, children, className, ...restProps } = props;

  const Component: ElementType = restProps.onClick ? Tappable : 'div';

  return (
    <Component
      {...restProps}
      className={classNames(getClassName('MiniInfoCell', platform), {
        [`MiniInfoCell--md-${mode}`]: mode !== 'base',
        'MiniInfoCell--mult': multiline,
        [`MiniInfoCell--sizeX-${sizeX}`]: sizeX === SizeType.COMPACT,
      }, className)}
    >
      <div className="MiniInfoCell__icon">
        {before}
      </div>
      <Text
        className="MiniInfoCell__content"
        weight={mode === 'more' ? 'medium' : 'regular'}
      >
        {children}
      </Text>
      {hasReactNode(after) &&
      <div className="MiniInfoCell__after">
        {after}
      </div>
      }
    </Component>
  );
};

MiniInfoCell.defaultProps = {
  mode: 'base',
};
