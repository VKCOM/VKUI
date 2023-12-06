import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useEffectDev } from '../../hooks/useEffectDev';
import { useEventListener } from '../../hooks/useEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { useDOM } from '../../lib/dom';
import { isRefObject } from '../../lib/isRefObject';
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
  onClose,
  className,
  style,
  popupOffsetDistance = 0,
  placement,
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
      offsetByMainAxis={popupOffsetDistance}
      placement={placement}
      className={classNames(
        styles['ActionSheet'],
        platform === 'ios' && styles['ActionSheet--ios'],
        styles['ActionSheet--menu'],
        sizeY === 'compact' && styles['ActionSheet--sizeY-compact'],
        className,
      )}
      style={style}
      getRootRef={elementRef}
      usePortal={false}
    >
      <FocusTrap onClose={onClose} {...restProps} onClick={onClick}>
        {children}
      </FocusTrap>
    </Popper>
  );
};
