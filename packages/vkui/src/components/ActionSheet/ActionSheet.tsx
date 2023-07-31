import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { Platform } from '../../lib/platform';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { Footnote } from '../Typography/Footnote/Footnote';
import { ActionSheetContext, ItemClickHandler } from './ActionSheetContext';
import { ActionSheetDefaultIosCloseItem } from './ActionSheetDefaultIosCloseItem';
import { ActionSheetDropdown } from './ActionSheetDropdown';
import { ActionSheetDropdownDesktop } from './ActionSheetDropdownDesktop';
import { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

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
  onClose: VoidFunction;
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
  popupDirection = 'bottom',
  popupOffsetDistance,
  placement,
  ...restProps
}: ActionSheetProps) => {
  const platform = usePlatform();
  const [closing, setClosing] = React.useState(false);
  const onClose = () => setClosing(true);
  const _action = React.useRef(noop);

  const afterClose = () => {
    restProps.onClose();
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
    if (closing) {
      fallbackTransitionFinish.set();
    } else {
      fallbackTransitionFinish.clear();
    }
  }, [closing, fallbackTransitionFinish]);

  const onItemClick = React.useCallback<ItemClickHandler>(
    (action, immediateAction, autoClose) => (event) => {
      event.persist();
      immediateAction && immediateAction(event);
      if (autoClose) {
        _action.current = () => action && action(event);
        setClosing(true);
      } else {
        action && action(event);
      }
    },
    [],
  );
  const contextValue = useObjectMemo({ onItemClick, isDesktop });

  const DropdownComponent = isDesktop ? ActionSheetDropdownDesktop : ActionSheetDropdown;

  const dropdownProps = isDesktop
    ? Object.assign(restProps, { popupOffsetDistance, popupDirection, placement })
    : restProps;

  const actionSheet = (
    <ActionSheetContext.Provider value={contextValue}>
      <DropdownComponent
        closing={closing}
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
      closing={closing}
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
