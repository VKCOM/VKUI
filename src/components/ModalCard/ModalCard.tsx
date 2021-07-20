import { FC, useContext } from 'react';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { Icon24Dismiss } from '@vkontakte/icons';
import { IOS } from '../../lib/platform';
import { withPlatform } from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';
import { withAdaptivity, AdaptivityProps, ViewHeight, ViewWidth } from '../../hoc/withAdaptivity';
import ModalDismissButton from '../ModalDismissButton/ModalDismissButton';
import ModalRootContext, { useModalRegistry } from '../ModalRoot/ModalRootContext';
import { ModalType } from '../ModalRoot/types';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { PlainCard, PlainCardProps } from '../PlainCard/PlainCard';

export interface ModalCardProps extends HasPlatform, AdaptivityProps, NavIdProps, PlainCardProps {
  /**
   * Будет вызван при закрытии карточки жестом
   */
  onClose?: VoidFunction;
}

const warn = warnOnce('ModalCard');

const ModalCard: FC<ModalCardProps> = (props: ModalCardProps) => {
  const {
    icon,
    header,
    subheader,
    children,
    actions,
    actionsLayout,
    onClose,
    platform,
    viewWidth,
    viewHeight,
    hasMouse,
    nav,
    ...restProps
  } = props;

  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);
  const canShowCloseBtn = viewWidth >= ViewWidth.SMALL_TABLET;
  const canShowCloseBtnIos = platform === IOS && !canShowCloseBtn;

  const modalContext = useContext(ModalRootContext);
  const { refs } = useModalRegistry(getNavId(props, warn), ModalType.CARD);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('ModalCard', platform), {
        'ModalCard--desktop': isDesktop,
      })}
    >
      <PlainCard
        vkuiClass="ModalCard__in"
        getRootRef={refs.innerElement}
        icon={icon}
        header={header}
        subheader={subheader}
        actions={actions}
        actionsLayout={actionsLayout}
      >
        {children}
        {canShowCloseBtn && <ModalDismissButton onClick={onClose || modalContext.onClose} />}
        {canShowCloseBtnIos &&
        <PanelHeaderButton vkuiClass="ModalCard__dismiss" onClick={onClose || modalContext.onClose}>
          <Icon24Dismiss />
        </PanelHeaderButton>
        }
      </PlainCard>
    </div>
  );
};

ModalCard.defaultProps = {
  actionsLayout: 'horizontal',
};

export default withAdaptivity(withPlatform(ModalCard), {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});
