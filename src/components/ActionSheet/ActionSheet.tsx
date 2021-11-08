import * as React from 'react';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { ViewWidth, ViewHeight } from '../../hoc/withAdaptivity';
import { IOS } from '../../lib/platform';
import { ActionSheetDropdownDesktop } from './ActionSheetDropdownDesktop';
import { ActionSheetDropdown } from './ActionSheetDropdown';
import { hasReactNode } from '../../lib/utils';
import { ActionSheetContext, ItemClickHandler } from './ActionSheetContext';
import Caption from '../Typography/Caption/Caption';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { warnOnce } from '../../lib/warnOnce';
import { SharedDropdownProps, PopupDirection, ToggleRef } from './types';
import './ActionSheet.css';

export interface ActionSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  text?: React.ReactNode;
  /**
   * Закрыть попап по клику снаружи. В v5 будет обязательным.
   */
  onClose?: VoidFunction;
  /**
   * Элемент, рядом с которым вылезает попап на десктопе.
   * Лучше передавать RefObject c current.
   * В v5 будет обязательным.
   */
  toggleRef?: ToggleRef;
  /**
   * Направление на десктопе
   */
  popupDirection?: PopupDirection;
  /**
   * Только iOS. В v5 будет обязательным.
   */
  iosCloseItem?: React.ReactNode;
}

const warn = warnOnce('ActionSheet');

export const ActionSheet: React.FC<ActionSheetProps> = ({
  children,
  className,
  header,
  text,
  style,
  iosCloseItem,
  ...restProps
}: ActionSheetProps) => {
  const platform = usePlatform();
  const [closing, setClosing] = React.useState(false);
  const onClose = () => setClosing(true);

  const closeAction = React.useRef<VoidFunction>();
  const afterClose = () => {
    restProps.onClose();
    closeAction.current && closeAction.current();
  };

  if (process.env.NODE_ENV === 'development' && !restProps.onClose) {
    warn('can\'t close on outer click without onClose');
  }

  const { viewWidth, viewHeight, hasMouse } = useAdaptivity();
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);

  const timeout = platform === IOS ? 300 : 200;

  const fallbackTransitionFinish = useTimeout(afterClose, timeout);
  React.useEffect(() => {
    if (closing) {
      if (isDesktop) {
        afterClose();
      } else {
        fallbackTransitionFinish.set();
      }
    } else {
      fallbackTransitionFinish.clear();
    }
  }, [closing]);

  const onItemClick = React.useCallback<ItemClickHandler>((action, autoclose) => (event) => {
    event.persist();

    if (autoclose) {
      closeAction.current = () => action && action(event);
      setClosing(true);
    } else {
      action && action(event);
    }
  }, []);
  const contextValue = useObjectMemo({ onItemClick, isDesktop });

  const DropdownComponent = isDesktop
    ? ActionSheetDropdownDesktop
    : ActionSheetDropdown;

  return (
    <PopoutWrapper
      closing={closing}
      alignY="bottom"
      className={className}
      style={style}
      onClick={!isDesktop ? onClose : null}
      hasMask={!isDesktop}
      fixed={!isDesktop}
    >
      <ActionSheetContext.Provider value={contextValue}>
        <DropdownComponent
          closing={closing}
          timeout={timeout}
          {...restProps as Omit<SharedDropdownProps, 'closing'>}
          onClose={onClose}
        >
          {(hasReactNode(header) || hasReactNode(text)) &&
            <header vkuiClass="ActionSheet__header">
              {hasReactNode(header) &&
                <Caption level="1" weight={platform === IOS ? 'semibold' : 'medium'} vkuiClass="ActionSheet__title">
                  {header}
                </Caption>
              }
              {hasReactNode(text) && <Caption level="1" weight="regular" vkuiClass="ActionSheet__text">{text}</Caption>}
            </header>
          }
          {children}
          {platform === IOS && !isDesktop && iosCloseItem}
        </DropdownComponent>
      </ActionSheetContext.Provider>
    </PopoutWrapper>
  );
};

ActionSheet.defaultProps = {
  popupDirection: 'bottom',
};
