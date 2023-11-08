import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { ModalCardBase, ModalCardBaseProps } from '../ModalCardBase/ModalCardBase';
import { ModalRootContext, useModalRegistry } from '../ModalRoot/ModalRootContext';
import { ModalType } from '../ModalRoot/types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './ModalCard.module.css';

const platformClassNames = {
  ios: styles['ModalCard--ios'],
  android: styles['ModalCard--android'],
  vkcom: styles['ModalCard--vkcom'],
};

export interface ModalCardProps extends NavIdProps, ModalCardBaseProps {}

const warn = warnOnce('ModalCard');

/**
 * @see https://vkcom.github.io/VKUI/#/ModalCard
 */
export const ModalCard = ({
  icon,
  header,
  subheader,
  children,
  actions,
  onClose,
  nav,
  id,
  size,
  getRootRef,
  ...restProps
}: ModalCardProps) => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const platform = usePlatform();

  const modalContext = React.useContext(ModalRootContext);
  const { refs } = useModalRegistry(getNavId({ nav, id }, warn), ModalType.CARD);
  const rootRef = useExternRef(getRootRef, refs.modalElement);

  const contextValue = React.useMemo(() => ({ labelId: `${id}-label` }), [id]);

  return (
    <RootComponent
      {...restProps}
      getRootRef={rootRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby={contextValue.labelId}
      id={id}
      baseClassName={classNames(
        styles['ModalCard'],
        platformClassNames.hasOwnProperty(platform)
          ? platformClassNames[platform]
          : platformClassNames.android,
        isDesktop && styles['ModalCard--desktop'],
      )}
    >
      <ModalCardBase
        className={styles['ModalCard__in']}
        getRootRef={refs.innerElement}
        icon={icon}
        header={header}
        subheader={subheader}
        actions={actions}
        onClose={onClose || modalContext.onClose}
        size={size}
      >
        {children}
      </ModalCardBase>
    </RootComponent>
  );
};
