import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { Footnote } from '../Typography/Footnote/Footnote';
import { ActionSheetContext, ItemClickHandler } from './ActionSheetContext';
import { ActionSheetDefaultIosCloseItem } from './ActionSheetDefaultIosCloseItem';
import { ActionSheetDropdownMenu } from './ActionSheetDropdownMenu';
import { ActionSheetDropdownSheet } from './ActionSheetDropdownSheet';
import { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

type CloseInitiators = 'action-item' | 'cancel-item' | 'other';
export interface ActionSheetOnCloseOptions {
  closedBy: CloseInitiators;
}

export interface ActionSheetProps
  extends Pick<SharedDropdownProps, 'toggleRef' | 'popupOffsetDistance' | 'placement'>,
    React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  text?: React.ReactNode;
  /**
   * Закрыть попап по клику снаружи.
   */
  onClose(options: ActionSheetOnCloseOptions): void;
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
  ...restProps
}: ActionSheetProps) => {
  const platform = usePlatform();
  const [closingBy, setClosingBy] = React.useState<undefined | CloseInitiators>(undefined);
  const onClose = () => setClosingBy('other');
  const _action = React.useRef(noop);

  const afterClose = () => {
    restProps.onClose({ closedBy: closingBy || 'other' });
    _action.current();
    _action.current = noop;
  };

  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const mode = modeProp ?? (isDesktop ? 'menu' : 'sheet');

  useScrollLock(mode === 'sheet');

  let timeout = platform === 'ios' ? 300 : 200;

  if (mode === 'menu') {
    timeout = 0;
  }

  const fallbackTransitionFinish = useTimeout(afterClose, timeout);
  React.useEffect(() => {
    if (closingBy) {
      fallbackTransitionFinish.set();
    } else {
      fallbackTransitionFinish.clear();
    }
  }, [closingBy, fallbackTransitionFinish]);

  const onItemClick = React.useCallback<ItemClickHandler>(
    ({ action, immediateAction, autoClose, isCancelItem }) =>
      (event) => {
        event.persist();
        immediateAction && immediateAction(event);
        if (autoClose) {
          _action.current = () => action && action(event);
          setClosingBy(isCancelItem ? 'cancel-item' : 'action-item');
        } else {
          action && action(event);
        }
      },
    [],
  );
  const contextValue = useObjectMemo({ onItemClick, mode });

  const DropdownComponent = mode === 'menu' ? ActionSheetDropdownMenu : ActionSheetDropdownSheet;

  const dropdownProps =
    mode === 'menu' ? Object.assign(restProps, { popupOffsetDistance, placement }) : restProps;

  const actionSheet = (
    <ActionSheetContext.Provider value={contextValue}>
      <DropdownComponent
        closing={Boolean(closingBy)}
        timeout={timeout}
        {...dropdownProps}
        onClose={onClose}
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
      onClick={onClose}
      fixed
    >
      {actionSheet}
    </PopoutWrapper>
  );
};
