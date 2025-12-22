'use client';

import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import { usePlatform } from '../../hooks/usePlatform';
import { useStableCallback } from '../../hooks/useStableCallback';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { type HasRootRef } from '../../types';
import type { ActionSheetItemProps } from '../ActionSheetItem/ActionSheetItem';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { Footnote } from '../Typography/Footnote/Footnote';
import { ActionSheetContext, type ItemClickHandler } from './ActionSheetContext';
import { ActionSheetDefaultIosCloseItem } from './ActionSheetDefaultIosCloseItem';
import { ActionSheetDropdownMenu } from './ActionSheetDropdownMenu';
import { ActionSheetDropdownSheet } from './ActionSheetDropdownSheet';
import type { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

export type ActionSheetOnCloseReason =
  | 'click-action-item'
  | 'click-cancel-item'
  | 'click-overlay'
  | 'click-outside'
  | 'keydown-item'
  | 'escape-key';

export type ActionSheetOnClosedReason = 'action-item' | 'cancel-item' | 'other';

/**
 * @deprecated Since 8.0.0 аргумент, переданный в функцию `onClosed`, устарел и будет удален в **VKUI v10**.
 * Для получения причины закрытия всплывающего окна используйте свойство `onClose`.
 */
export interface ActionSheetOnCloseOptions {
  /**
   * Причина закрытия всплывающего элемента.
   *
   * @deprecated Since 8.0.0 аргумент, переданный в функцию `onClosed`, устарел и будет удален в **VKUI v10**.
   * Для получения причины закрытия всплывающего окна используйте свойство `onClose`.
   */
  closedBy: ActionSheetOnClosedReason;
}

export interface ActionSheetProps
  extends Pick<
      SharedDropdownProps,
      'toggleRef' | 'popupOffsetDistance' | 'placement' | 'allowClickPropagation'
    >,
    Omit<
      UseFocusTrapProps,
      'onClose' | 'mount' | 'disabled' | 'captureEscapeKeyboardEvent' | 'mutationObserverOptions'
    >,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'autoFocus' | 'title'> {
  /**
   * Заголовок всплывающего окна.
   */
  title?: React.ReactNode;
  /**
   * Описание всплывающего окна, под заголовком.
   */
  description?: React.ReactNode;
  /**
   * Обработчик закрытия всплывающего окна.
   */
  onClose?: (reason: ActionSheetOnCloseReason) => void;
  /**
   * Обработчик закрытия всплывающего окна срабатывающий после завершения анимации закрытия.
   *
   * > Since 8.0.0 аргумент, переданный в данную функцию, устарел и будет удален в **VKUI v10**.
   * > Для получения причины закрытия всплывающего окна используйте свойство `onClose`.
   */
  onClosed: (options: ActionSheetOnCloseOptions) => void;
  /**
   * Только мобильный iOS.
   */
  iosCloseItem?: React.ReactNode;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `iosCloseItem`: свойства для прокидывания в кнопку отмены на iOS.
   */
  slotProps?: {
    iosCloseItem?: Omit<ActionSheetItemProps, 'mode' | 'isCancelItem'> & HasRootRef<HTMLElement>;
  };
  /**
   * Режим отображения компонента:
   *
   * - `sheet` – отображение снизу экрана в виде всплывающего окна, подходит для мобильных устройств
   * - `menu` – отображение в виде всплывающего элемента, относительно якорного элемента.
   */
  mode?: 'sheet' | 'menu';
  /**
   * @deprecated Since 7.3.0.  Будет удалeно в **VKUI v9**.
   */
  mount?: boolean; // TODO [>=9]: удалить неиспользуемое свойство
  /**
   * @deprecated Since 7.3.0. Будет удалeно в **VKUI v9**.
   */
  disabled?: boolean; // TODO [>=9]: удалить неиспользуемое свойство
}

/**
 * @see https://vkui.io/components/action-sheet
 */
export const ActionSheet = ({
  children,
  className,
  title,
  description,
  style,
  iosCloseItem,
  slotProps,
  popupOffsetDistance,
  placement,
  mode: modeProp,
  onClose: onCloseProp,
  onClosed,
  ...restProps
}: ActionSheetProps): React.ReactNode => {
  const platform = usePlatform();
  const [closedReason, setClosedReason] = React.useState<undefined | ActionSheetOnClosedReason>(
    undefined,
  );
  const onCloseStable = useStableCallback(onCloseProp || noop);

  const onClose = React.useCallback(
    (onCloseReason: ActionSheetOnCloseReason, onClosedReason: ActionSheetOnClosedReason) => {
      onCloseStable(onCloseReason);
      setClosedReason(onClosedReason);
    },
    [onCloseStable],
  );

  const onOverlayClick = React.useCallback(() => onClose('click-overlay', 'other'), [onClose]);

  const actionCallbackRef = React.useRef(noop);

  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    closedReason !== undefined ? 'exit' : 'enter',
    {
      onExited() {
        onClosed({ closedBy: closedReason || 'other' });
        actionCallbackRef.current();
        actionCallbackRef.current = noop;
      },
    },
  );

  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const mode = modeProp ?? (isDesktop ? 'menu' : 'sheet');

  useScrollLock(mode === 'sheet');

  const onItemClick = React.useCallback<ItemClickHandler>(
    ({ action, immediateAction, autoClose, isCancelItem }) =>
      (event) => {
        event.persist();
        immediateAction && immediateAction(event);
        if (autoClose) {
          if (action) {
            actionCallbackRef.current = () => action(event);
          }
          onClose(
            isCancelItem ? 'click-cancel-item' : 'click-action-item',
            isCancelItem ? 'cancel-item' : 'action-item',
          );
        } else {
          action && action(event);
        }
      },
    [onClose],
  );
  const contextValue = React.useMemo(
    () => ({ onItemClick, mode, onClose }),
    [mode, onClose, onItemClick],
  );

  const DropdownComponent = mode === 'menu' ? ActionSheetDropdownMenu : ActionSheetDropdownSheet;

  const dropdownProps =
    mode === 'menu' ? Object.assign(restProps, { popupOffsetDistance, placement }) : restProps;

  const actionSheet = (
    <ActionSheetContext.Provider value={contextValue}>
      <DropdownComponent
        closing={Boolean(closedReason)}
        role="dialog"
        aria-modal="true"
        autoFocus={animationState === 'entered'}
        {...dropdownProps}
        {...animationHandlers}
        className={mode === 'menu' ? className : undefined}
        style={mode === 'menu' ? style : undefined}
      >
        <div className={styles.contentWrapper}>
          {(title || description) && (
            <div className={styles.header}>
              {title && (
                <Footnote weight="2" className={styles.title}>
                  {title}
                </Footnote>
              )}
              {description && <Footnote className={styles.description}>{description}</Footnote>}
            </div>
          )}
          {children}
        </div>
        {platform === 'ios' && mode === 'sheet' && (
          <div className={styles.closeItemWrapperIos}>
            {iosCloseItem ?? <ActionSheetDefaultIosCloseItem {...slotProps?.iosCloseItem} />}
          </div>
        )}
      </DropdownComponent>
    </ActionSheetContext.Provider>
  );

  return (
    <AppRootPortal>
      <PopoutWrapper
        noBackground={mode === 'menu'}
        closing={Boolean(closedReason)}
        alignY="bottom"
        className={className}
        style={style}
        onClick={onOverlayClick}
      >
        {actionSheet}
      </PopoutWrapper>
    </AppRootPortal>
  );
};
