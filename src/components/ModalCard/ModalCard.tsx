import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { withPlatform } from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';
import { IOS } from '../../lib/platform';
import { withAdaptivity, AdaptivityProps, ViewHeight, ViewWidth } from '../../hoc/withAdaptivity';
import ModalRootContext, { useModalRegistry } from '../ModalRoot/ModalRootContext';
import { ModalType } from '../ModalRoot/types';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { ModalCardBase, ModalCardBaseProps } from '../ModalCardBase/ModalCardBase';
import './ModalCard.css';

export interface ModalCardProps extends HasPlatform, AdaptivityProps, NavIdProps, ModalCardBaseProps {}

const warn = warnOnce('ModalCard');

const ModalCard: React.FC<ModalCardProps> = (props: ModalCardProps) => {
  const {
    icon,
    header,
    subheader,
    children,
    actions,
    actionsLayout,
    onClose: _onClose,
    platform,
    viewWidth,
    viewHeight,
    hasMouse,
    nav,
    ...restProps
  } = props;

  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);

  const modalContext = React.useContext(ModalRootContext);
  const { refs } = useModalRegistry(getNavId(props, warn), ModalType.CARD);
  const onClose = _onClose || modalContext.onClose;

  const innerElementRef = useExternRef<HTMLDivElement>(refs.innerElement);
  useFocusTrap(innerElementRef, onClose, {
    timeout: platform === IOS ? 400 : 320,
  });

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('ModalCard', platform), {
        'ModalCard--desktop': isDesktop,
      })}
    >
      <ModalCardBase
        vkuiClass="ModalCard__in"
        getRootRef={innerElementRef}
        icon={icon}
        header={header}
        subheader={subheader}
        actions={actions}
        actionsLayout={actionsLayout}
        onClose={onClose}
      >
        {children}
      </ModalCardBase>
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
