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
import './ActionSheet.css';

export type PopupDirectionFunction = (elRef: React.RefObject<HTMLDivElement>) => 'top' | 'bottom';

export interface ActionSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  text?: React.ReactNode;
  onClose?: VoidFunction;
  /**
   * Desktop only
   */
  toggleRef: Element;
  /**
   * Desktop only
   */
  popupDirection?: 'top' | 'bottom' | PopupDirectionFunction;
  /**
   * iOS only
   */
  iosCloseItem: React.ReactNode;
}

export type AnimationEndCallback = (e?: AnimationEvent) => void;

export const ActionSheet: React.FC<ActionSheetProps> = ({
  children,
  className,
  header,
  text,
  style,
  iosCloseItem,
  ...restProps
}) => {
  const platform = usePlatform();
  const [closing, setClosing] = React.useState(false);
  const onClose = () => setClosing(true);

  const [_closeAction, setCloseAction] = React.useState<VoidFunction>();
  const afterClose = () => {
    restProps.onClose();
    _closeAction && _closeAction();
    setCloseAction(undefined);
  };

  const { viewWidth, viewHeight, hasMouse } = useAdaptivity();
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);

  const fallbackTransitionFinish = useTimeout(afterClose, platform === IOS ? 300 : 200);
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
      setCloseAction(() => action && action(event));
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
          onClose={onClose}
          onTransitionEnd={closing && !isDesktop ? afterClose : null}
          {...restProps}
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
