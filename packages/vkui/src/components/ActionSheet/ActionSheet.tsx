import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { usePlatform } from '../../hooks/usePlatform';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
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
  closedBy: CloseInitiators;
}

export interface ActionSheetProps
  extends Pick<
      SharedDropdownProps,
      'toggleRef' | 'popupOffsetDistance' | 'placement' | 'autoFocus'
    >,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'autoFocus'> {
  header?: React.ReactNode;
  text?: React.ReactNode;
  /**
   * Закрыть попап по клику снаружи.
   */
  onClose: (options: ActionSheetOnCloseOptions) => void;
  /**
   * Только мобильный iOS.
   */
  iosCloseItem?: React.ReactNode;
  mode?: 'sheet' | 'menu';
}

/**
 * @see https://vkcom.github.io/VKUI/#/ActionSheet
 */
export const ActionSheet = ({
  children,
  className,
  header,
  text,
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
  const onCloseWithOther = () => setClosingBy('other');
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
  const contextValue = useObjectMemo({ onItemClick, mode, onClose: onCloseWithOther });

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
        <div className={styles['ActionSheet__content-wrapper']}>
          {(header || text) && (
            <div className={styles['ActionSheet__header']}>
              {header && (
                <Footnote weight="2" className={styles['ActionSheet__title']}>
                  {header}
                </Footnote>
              )}
              {text && <Footnote className={styles['ActionSheet__text']}>{text}</Footnote>}
            </div>
          )}
          {children}
        </div>
        {platform === 'ios' && mode === 'sheet' && (
          <div className={styles['ActionSheet__close-item-wrapper--ios']}>
            {iosCloseItem ?? <ActionSheetDefaultIosCloseItem />}
          </div>
        )}
      </DropdownComponent>
    </ActionSheetContext.Provider>
  );

  if (mode === 'menu') {
    return actionSheet;
  }

  return (
    <PopoutWrapper
      closing={Boolean(closingBy)}
      alignY="bottom"
      className={className}
      style={style}
      onClick={onCloseWithOther}
      fixed
    >
      {actionSheet}
    </PopoutWrapper>
  );
};
