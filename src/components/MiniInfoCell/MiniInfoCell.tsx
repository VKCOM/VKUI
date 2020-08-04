import React, { ElementType, FC, HTMLAttributes, ReactNode } from 'react';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import getClassName from '../../helpers/getClassName';
import Text from '../Typography/Text/Text';
import Tappable from '../../components/Tappable/Tappable';
import { hasReactNode } from '../../lib/utils';

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

  /**
   * @deprecated Будет удалено в v4. Используйте свойство `textWrap`.
   */
  multiline?: boolean;

  /**
   * Тип ячейки:
   *
   * - `base` – базовая ячейка с серой иконкой и серым текстом.<br />
   * В компонент можно передать `Link`, чтобы визуально сделать часть текста ссылкой.
   * - `add` – тип ячейки, который показывает, что взаимодействие с ней должно вызывать действие добавления чего-то.
   * - `more` – взаимодействие с такой ячейкой должно открывать какую-то подробную информацию.
   */
  mode?: 'base' | 'add' | 'more';

  /**
   * Тип отображения текста:
   *
   * - `nowrap` – в одну строку, текст не переносится и обрезается.
   * - `short` – максимально отображается 3 строки, остальное обрезается.
   * - `full` – текст отображается полностью.
   */
  textWrap?: 'nowrap' | 'short' | 'full';

  /**
   * Стиль текста:
   *
   * - `primary` – используйте этот стиль, если хотите выделить информацию в общем списке.<br />Пример использования: подробная информация на странице сообщества
   * - `secondary` – стиль по-умолчанию.
   */
  textLevel?: 'primary' | 'secondary';
}

export const MiniInfoCell: FC<MiniInfoCellProps> = (props) => {
  const platform = usePlatform();
  const {
    before,
    after,
    mode,
    textWrap,
    textLevel,
    multiline,
    children,
    className,
    ...restProps
  } = props;

  const Component: ElementType = restProps.onClick ? Tappable : 'div';
  const finalTextWrap: typeof textWrap = multiline ? 'short' : textWrap;

  return (
    <Component
      {...restProps}
      className={classNames(getClassName('MiniInfoCell', platform), {
        [`MiniInfoCell--md-${mode}`]: mode !== 'base',
        [`MiniInfoCell--wr-${finalTextWrap}`]: finalTextWrap !== 'nowrap',
      }, `MiniInfoCell--lvl-${textLevel}`, className)}
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
  textWrap: 'nowrap',
  textLevel: 'secondary',
};
