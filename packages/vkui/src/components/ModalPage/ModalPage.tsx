import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useExternRef } from '../../hooks/useExternRef';
import { useOrientationChange } from '../../hooks/useOrientationChange';
import { usePlatform } from '../../hooks/usePlatform';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { multiRef } from '../../lib/utils';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { ModalRootContext, useModalRegistry } from '../ModalRoot/ModalRootContext';
import { RootComponent } from '../RootComponent/RootComponent';
import { ModalPageContext } from './ModalPageContext';
import styles from './ModalPage.module.css';

const sizeClassName = {
  s: styles['ModalPage--size-s'],
  m: styles['ModalPage--size-m'],
  l: styles['ModalPage--size-l'],
};

export interface ModalPageProps extends HTMLAttributesWithRootRef<HTMLDivElement>, NavIdProps {
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header?: React.ReactNode;
  /**
   * Задаёт контенту максимальную ширину для десктопной версии.
   */
  size?: 's' | 'm' | 'l' | number;
  /**
   * Задаёт модальному окну фиксированную высоту.
   * Можно передать числовое значение в пикселях, а можно строкой, в том числе и в процентах "50%".
   * В мобильной версии 'settlingHeight' будет считаться относительно заданного height.
   */
  height?: string | number;
  /**
   * Будет вызвано при начале открытия модалки.
   */
  onOpen?: VoidFunction;
  /**
   * Будет вызвано при окончательном открытии модалки.
   */
  onOpened?: VoidFunction;
  /**
   * Будет вызвано при начале закрытия модалки.
   */
  onClose?: VoidFunction;
  /**
   * Будет вызвано при окончательном закрытии модалки.
   */
  onClosed?: VoidFunction;
  /**
   * Процент, на который изначально будет открыта модальная страница. При `settlingHeight={100}` модальная страница раскрывается на всю высоту.
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight?: boolean;
  getModalContentRef?: React.Ref<HTMLDivElement>;
  /**
   * Скрывает кнопку закрытия (актуально для iOS, т.к. можно отрисовать кнопку закрытия внутри модалки)
   */
  hideCloseButton?: boolean;
  modalContentTestId?: string;
  /**
   * `data-testid` для кнопки закрытия
   */
  modalDismissButtonTestId?: string;
}

const warn = warnOnce('ModalPage');

/**
 * @see https://vkcom.github.io/VKUI/#/ModalPage
 */
export const ModalPage = ({
  children,
  header,
  size: sizeProp = 's',
  onOpen,
  onOpened,
  onClose,
  onClosed,
  settlingHeight, // 75
  dynamicContentHeight,
  getModalContentRef,
  nav,
  id: idProp,
  hideCloseButton = false,
  height,
  modalContentTestId,
  modalDismissButtonTestId,
  getRootRef,
  ...restProps
}: ModalPageProps) => {
  const generatingId = React.useId();
  const id = idProp || generatingId;

  const { updateModalHeight } = React.useContext(ModalRootContext);

  const platform = usePlatform();
  const orientation = useOrientationChange();
  const { sizeX, isDesktop } = useAdaptivityWithJSMediaQueries();

  React.useEffect(() => {
    if (dynamicContentHeight) {
      updateModalHeight();
    }
  }, [children, dynamicContentHeight, orientation, updateModalHeight]);

  const isCloseButtonShown = !hideCloseButton && isDesktop;
  const size = isDesktop ? sizeProp : 's';

  const modalContext = React.useContext(ModalRootContext);
  const { refs } = useModalRegistry(getNavId({ nav, id }, warn), 'page');
  const rootRef = useExternRef(getRootRef, refs.modalElement);

  const contextValue = React.useMemo(() => ({ labelId: `${id}-label` }), [id]);

  return (
    <ModalPageContext.Provider value={contextValue}>
      <RootComponent
        {...restProps}
        getRootRef={rootRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={contextValue.labelId}
        id={id}
        baseClassName={classNames(
          styles['ModalPage'],
          platform === 'ios' && styles['ModalPage--ios'],
          isDesktop && styles['ModalPage--desktop'],
          sizeX === 'regular' && 'vkuiInternalModalPage--sizeX-regular',
          typeof size === 'string' && sizeClassName[size],
        )}
      >
        <div
          className={styles['ModalPage__in-wrap']}
          style={{
            maxWidth: typeof size === 'number' ? size : undefined,
            height,
          }}
          ref={refs.innerElement}
        >
          <div className={styles['ModalPage__in']}>
            <div className={styles['ModalPage__header']} ref={refs.headerElement}>
              {header}
            </div>

            <div className={styles['ModalPage__content-wrap']}>
              <div
                className={styles['ModalPage__content']}
                ref={multiRef<HTMLDivElement>(refs.contentElement, getModalContentRef)}
                {...(modalContentTestId && { 'data-testid': modalContentTestId })}
              >
                <div className={styles['ModalPage__content-in']}>{children}</div>
              </div>
              <div ref={refs.bottomInset} className={styles['ModalPage__bottom-inset']} />
            </div>
            {isCloseButtonShown && (
              <ModalDismissButton
                data-testid={modalDismissButtonTestId}
                onClick={onClose || modalContext.onClose}
              />
            )}
          </div>
        </div>
      </RootComponent>
    </ModalPageContext.Provider>
  );
};
