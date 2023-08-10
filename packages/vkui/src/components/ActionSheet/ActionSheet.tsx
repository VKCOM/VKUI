import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { Platform } from '../../lib/platform';
import { warnOnce } from '../../lib/warnOnce';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { Footnote } from '../Typography/Footnote/Footnote';
import { ActionSheetContext, ItemClickHandler } from './ActionSheetContext';
import { ActionSheetDefaultIosCloseItem } from './ActionSheetDefaultIosCloseItem';
import { ActionSheetDropdown } from './ActionSheetDropdown';
import { ActionSheetDropdownDesktop } from './ActionSheetDropdownDesktop';
import { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

const warn = warnOnce('ActionSheet');
type CloseInitiators = 'action-item' | 'cancel-item' | 'other';
export interface ActionSheetOnCloseOptions {
  closedBy: CloseInitiators;
}

export interface ActionSheetProps
  extends Pick<
      SharedDropdownProps,
      'toggleRef' | 'popupDirection' | 'popupOffsetDistance' | 'placement'
    >,
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
  popupDirection,
  popupOffsetDistance,
  placement,
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

  useScrollLock(!isDesktop);

  let timeout = platform === Platform.IOS ? 300 : 200;

  if (isDesktop) {
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
  const contextValue = useObjectMemo({ onItemClick, isDesktop });

  const DropdownComponent = isDesktop ? ActionSheetDropdownDesktop : ActionSheetDropdown;

  if (process.env.NODE_ENV === 'development' && popupDirection) {
    // TODO [>=6]: popupDirection
    warn('Свойство "popupDirection" будет удалено в v6. Используйте свойство "placement"');
  }

  popupDirection = popupDirection !== undefined ? popupDirection : 'bottom';

  const dropdownProps = isDesktop
    ? Object.assign(restProps, { popupOffsetDistance, popupDirection, placement })
    : restProps;

  const actionSheet = (
    <ActionSheetContext.Provider value={contextValue}>
      <DropdownComponent
        closing={Boolean(closingBy)}
        timeout={timeout}
        {...dropdownProps}
        onClose={onClose}
        className={isDesktop ? className : undefined}
        style={isDesktop ? style : undefined}
      >
        {(header || text) && (
          <header className={styles['ActionSheet__header']}>
            {header && (
              <Footnote weight="2" className={styles['ActionSheet__title']}>
                {header}
              </Footnote>
            )}
            {text && <Footnote className={styles['ActionSheet__text']}>{text}</Footnote>}
          </header>
        )}
        {children}
        {platform === Platform.IOS &&
          !isDesktop &&
          (iosCloseItem ?? <ActionSheetDefaultIosCloseItem />)}
      </DropdownComponent>
    </ActionSheetContext.Provider>
  );

  if (isDesktop) {
    return actionSheet;
  }

  return (
    <PopoutWrapper
      closing={Boolean(closingBy)}
      alignY="bottom"
      className={className}
      style={style}
      onClick={onClose}
      hasMask
      fixed
    >
      {actionSheet}
    </PopoutWrapper>
  );
};
