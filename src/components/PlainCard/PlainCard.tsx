import { FC, HTMLAttributes, ReactNode } from 'react';
import { hasReactNode } from '../../lib/utils';
import Title from '../Typography/Title/Title';
import Subhead from '../Typography/Subhead/Subhead';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { AdaptivityProps, ViewHeight, ViewWidth, withAdaptivity } from '../../hoc/withAdaptivity';
import { HasRootRef } from '../../types';
import './PlainCard.css';

export interface PlainCardProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  /**
   * Иконка.
   *
   * Может быть компонентом иконки, например, `<Icon56MoneyTransferOutline />`, или `<Avatar size={72} src="" />`
   */
  icon?: ReactNode;

  /**
   * Заголовок карточки
   */
  header?: ReactNode;

  /**
   * Подзаголовок
   */
  subheader?: ReactNode;

  /**
   * Кнопки-действия.
   *
   * Рекомендуется использовать `<Button size="l" mode="primary" />` или `<Button size="l" mode="secondary" />`
   */
  actions?: ReactNode;

  /**
   * Тип отображения кнопок: вертикальный или горизонтальный
   */
  actionsLayout?: 'vertical' | 'horizontal';
}

const PlainCardComponent: FC<PlainCardProps> = ({
  getRootRef,
  icon,
  header,
  subheader,
  children,
  actions,
  actionsLayout,
  viewWidth,
  hasMouse,
  viewHeight,
  ...restProps
}: PlainCardProps & AdaptivityProps) => {
  const platform = usePlatform();
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('PlainCard', platform), {
        'PlainCard--desktop': isDesktop,
      })}
      ref={getRootRef}
    >
      <div vkuiClass="PlainCard__container">
        {hasReactNode(icon) && <div vkuiClass="PlainCard__icon">{icon}</div>}
        {hasReactNode(header) && <Title level="2" weight="semibold" vkuiClass="PlainCard__header">{header}</Title>}
        {hasReactNode(subheader) && <Subhead weight="regular" vkuiClass="PlainCard__subheader">{subheader}</Subhead>}

        {children}

        {hasReactNode(actions) &&
        <div vkuiClass={classNames('PlainCard__actions', {
          'PlainCard__actions--v': actionsLayout === 'vertical',
        })}>
          {actions}
        </div>
        }
      </div>
    </div>
  );
};

export const PlainCard = withAdaptivity(PlainCardComponent, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});
