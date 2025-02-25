'use client';

import { Icon20Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE } from '../../lib/sheet';
import { type HasRef, type HTMLAttributesWithRootRef } from '../../types';
import { ModalOutsideButton } from '../ModalOutsideButton/ModalOutsideButton';
import { ModalOutsideButtons } from '../ModalOutsideButtons/ModalOutsideButtons';
import { ModalPageContent } from '../ModalPageContent/ModalPageContent';
import { RootComponent } from '../RootComponent/RootComponent';
import { type ModalPageInternalProps } from './ModalPageInternal';
import styles from './ModalPage.module.css';

export interface ModalPageBaseProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'title'>,
    HasRef<HTMLDivElement>,
    Pick<
      ModalPageInternalProps,
      | 'disableContentPanningGesture'
      | 'header'
      | 'children'
      | 'footer'
      | 'outsideButtons'
      | 'modalContentTestId'
      | 'modalDismissButtonTestId'
      | 'modalDismissButtonLabel'
      | 'hideCloseButton'
      | 'onClose'
    > {
  isDesktop?: boolean;
  closable?: boolean;
}

export const ModalPageBase: React.FC<ModalPageBaseProps> = ({
  isDesktop,
  getRef,
  disableContentPanningGesture,
  header,
  children,
  footer,
  outsideButtons,
  modalContentTestId,
  modalDismissButtonTestId,
  modalDismissButtonLabel,
  hideCloseButton,
  closable,
  onClose = noop,
  ...restProps
}) => {
  const disableContentPanningGestureProp = disableContentPanningGesture
    ? BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE
    : undefined;

  const closeButton =
    hideCloseButton || !isDesktop ? null : (
      <ModalOutsideButton
        data-testid={modalDismissButtonTestId}
        onClick={
          closable
            ? function handleDismissButtonClick(event) {
                onClose('click-close-button', event);
              }
            : undefined
        }
        aria-label={modalDismissButtonLabel}
      >
        <Icon20Cancel />
      </ModalOutsideButton>
    );

  return (
    <RootComponent role="document" baseClassName={styles.document} {...restProps}>
      <div className={classNames(styles.children, isDesktop && styles.childrenDesktop)}>
        {hasReactNode(header) && header}
        <ModalPageContent
          getRootRef={getRef}
          data-testid={modalContentTestId}
          {...disableContentPanningGestureProp}
        >
          {children}
        </ModalPageContent>
        {hasReactNode(footer) && footer}
      </div>
      {isDesktop && (closeButton || outsideButtons) && (
        <ModalOutsideButtons>
          {closeButton}
          {outsideButtons}
        </ModalOutsideButtons>
      )}
    </RootComponent>
  );
};
