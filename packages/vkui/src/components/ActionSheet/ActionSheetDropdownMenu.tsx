import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useEffectDev } from '../../hooks/useEffectDev';
import { useEventListener } from '../../hooks/useEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { useDOM } from '../../lib/dom';
import { isRefObject } from '../../lib/isRefObject';
import { Platform } from '../../lib/platform';
import { warnOnce } from '../../lib/warnOnce';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { Popper } from '../Popper/Popper';
import { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

const warn = warnOnce('ActionSheet');
function getEl(ref: SharedDropdownProps['toggleRef']): Element | null | undefined {
  return ref && 'current' in ref ? ref.current : ref;
}

export const ActionSheetDropdownMenu = ({
  children,
  toggleRef,
  closing,
  popupDirection,
  onClose,
  className,
  style,
  popupOffsetDistance = 0,
  placement: placementProp,
  ...restProps
}: SharedDropdownProps) => {
  const { document } = useDOM();
  const platform = usePlatform();
  const { sizeY } = useAdaptivityWithJSMediaQueries();
  const elementRef = React.useRef<HTMLDivElement | null>(null);

  useEffectDev(() => {
    const toggleEl = getEl(toggleRef);
    if (!toggleEl) {
      warn(`Свойство "toggleRef" не передано`, 'error');
    }
  }, [toggleRef]);

  const isPopupDirectionTop = React.useMemo(
    () =>
      popupDirection === 'top' ||
      (typeof popupDirection === 'function' && popupDirection(elementRef) === 'top'),
    [popupDirection, elementRef],
  );

  const placement = placementProp ?? (isPopupDirectionTop ? 'top-end' : 'bottom-end');

  const bodyClickListener = useEventListener('click', (e: MouseEvent) => {
    const dropdownElement = elementRef?.current;
    if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
      onClose?.();
    }
  });

  React.useEffect(() => {
    setTimeout(() => {
      bodyClickListener.add(document!.body);
    });
  }, [bodyClickListener, document]);

  const onClick = React.useCallback((e: React.MouseEvent<HTMLElement>) => e.stopPropagation(), []);

  const targetRef = React.useMemo(() => {
    if (isRefObject<SharedDropdownProps['toggleRef'], HTMLElement>(toggleRef)) {
      return toggleRef;
    }

    return { current: toggleRef as HTMLElement };
  }, [toggleRef]);

  return (
    <Popper
      targetRef={targetRef}
      offsetDistance={popupOffsetDistance}
      placement={placement}
      className={classNames(
        styles['ActionSheet'],
        platform === Platform.IOS && styles['ActionSheet--ios'],
        styles['ActionSheet--menu'],
        sizeY === SizeType.COMPACT && styles['ActionSheet--sizeY-compact'],
        className,
      )}
      style={style}
      getRef={elementRef}
      forcePortal={false}
    >
      <FocusTrap onClose={onClose} {...restProps} onClick={onClick}>
        {children}
      </FocusTrap>
    </Popper>
  );
};
