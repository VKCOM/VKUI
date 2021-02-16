import { FunctionComponent, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import { hasReactNode } from '../../lib/utils';
import Text from '../Typography/Text/Text';
import Caption from '../Typography/Caption/Caption';
import { withAdaptivity } from '../../hoc/withAdaptivity';

export interface RichCellProps extends TappableProps {
  /**
   * Контейнер для текста под `children`.
   */
  text?: ReactNode;
  /**
   * Контейнер для текста под `text`.
   */
  caption?: ReactNode;
  /**
   * Контейнер для контента под `caption`. Например `<UsersStack size="s" />`
   */
  bottom?: ReactNode;
  /**
   * Кнопка или набор кнопок `<Button size="s" />`. Располагается под `bottom`.
   */
  actions?: ReactNode;
  /**
   * `<Avatar size={48|72} />`
   */
  before?: ReactNode;
  /**
   * Иконка 28 или текст
   */
  after?: ReactNode;
  /**
   * Убирает анимацию нажатия
   */
  disabled?: boolean;
  multiline?: boolean;
}

const RichCell: FunctionComponent<RichCellProps> = ({
  children,
  text,
  caption,
  before,
  after,
  bottom,
  actions,
  multiline,
  className,
  Component,
  onClick,
  sizeY,
  ...restProps
}) => {
  const platform = usePlatform();
  const RootComponent = restProps.disabled ? Component : Tappable;
  Component = restProps.disabled ? undefined : Component;

  const props: RichCellProps = restProps;

  if (!restProps.disabled) {
    props.Component = restProps.href ? 'a' : Component;
    props.onClick = onClick;
  }

  return (
    <RootComponent
      {...props}
      className={
        classNames(
          className,
          getClassName('RichCell', platform),
          {
            'RichCell--mult': multiline,
          },
          `RichCell--sizeY-${sizeY}`,
        )
      }
    >
      {before}
      <div className="RichCell__in">
        <div className="RichCell__top">
          {/* Этот after будет скрыт из верстки. Он нужен для CSS */}
          {after}
          <Text weight="medium" className="RichCell__content">
            <div className="RichCell__children">{children}</div>
            {hasReactNode(after) && <div className="RichCell__after">{after}</div>}
          </Text>
          {hasReactNode(text) && <Text weight="regular" className="RichCell__text">{text}</Text>}
          {hasReactNode(caption) && <Caption level="1" weight="regular" className="RichCell__caption">{caption}</Caption>}
          {(hasReactNode(bottom) || hasReactNode(actions)) &&
            <div className="RichCell__bottom">
              {bottom}
              {hasReactNode(actions) && <div className="RichCell__actions">{actions}</div>}
            </div>
          }
        </div>
      </div>
    </RootComponent>
  );
};

RichCell.defaultProps = {
  Component: 'div',
};

export default withAdaptivity(RichCell, { sizeY: true });
