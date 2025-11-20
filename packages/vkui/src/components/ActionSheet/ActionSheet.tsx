'use client';

import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import { usePlatform } from '../../hooks/usePlatform';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
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

type CloseInitiators = 'action-item' | 'cancel-item' | 'other';
export interface ActionSheetOnCloseOptions {
  /**
   * Причина закрытия всплывающего элемента.
   */
  closedBy: CloseInitiators;
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
   * Заголовок всплыващего окна.
   */
  title?: React.ReactNode;
  /**
   * Описание всплыващего окна, под заголовком.
   */
  description?: React.ReactNode;
  /**
   * Закрыть всплыващее окно по нажатию снаружи.
   */
  onClose: (options: ActionSheetOnCloseOptions) => void;
  /**
   * Только мобильный iOS.
   */
  iosCloseItem?: React.ReactNode;
  /**
   * Режим отображения компонента:
   *
   * - `sheet` – отображение снизу экрана в виде всплывающего окна, подходит для мобильных устройств
   * - `menu` –  отображение в виде всплывающего элемента, относительно якорного элемента.
   */
  mode?: 'sheet' | 'menu';
  /**
   * @deprecated Since 7.3.0.
   *
   * Свойство не используется и будет удалено в `v8`.
   */
  mount?: boolean;
  /**
   * @deprecated Since 7.3.0.
   *
   * Свойство не используется и будет удалено в `v8`.
   */
  disabled?: boolean;
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
  popupOffsetDistance,
  placement,
  mode: modeProp,
  onClose,
  ...restProps
}: ActionSheetProps): React.ReactNode => {
  const platform = usePlatform();
  const [closingBy, setClosingBy] = React.useState<undefined | CloseInitiators>(undefined);
  const onCloseWithOther = React.useCallback(() => setClosingBy('other'), []);
  const actionCallbackRef = React.useRef(noop);

  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    closingBy !== undefined ? 'exit' : 'enter',
    {
      onExited() {
        onClose({ closedBy: closingBy || 'other' });
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
          setClosingBy(isCancelItem ? 'cancel-item' : 'action-item');
        } else {
          action && action(event);
        }
      },
    [],
  );
  const contextValue = React.useMemo(
    () => ({ onItemClick, mode, onClose: onCloseWithOther }),
    [mode, onCloseWithOther, onItemClick],
  );

  const DropdownComponent = mode === 'menu' ? ActionSheetDropdownMenu : ActionSheetDropdownSheet;

  const dropdownProps =
    mode === 'menu' ? Object.assign(restProps, { popupOffsetDistance, placement }) : restProps;

  const actionSheet = (
    <ActionSheetContext.Provider value={contextValue}>
      <DropdownComponent
        closing={Boolean(closingBy)}
        role="dialog"
        aria-modal="true"
        autoFocus={animationState === 'entered'}
        {...dropdownProps}
        {...animationHandlers}
        onClose={onCloseWithOther}
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
            {iosCloseItem ?? <ActionSheetDefaultIosCloseItem />}
          </div>
        )}
      </DropdownComponent>
    </ActionSheetContext.Provider>
  );

  return (
    <AppRootPortal>
      <PopoutWrapper
        noBackground={mode === 'menu'}
        closing={Boolean(closingBy)}
        alignY="bottom"
        className={className}
        style={style}
        onClick={onCloseWithOther}
        strategy="fixed"
      >
        {actionSheet}
      </PopoutWrapper>
    </AppRootPortal>
  );
};
