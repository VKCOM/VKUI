import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { useDOM } from '../../lib/dom';
import { usePlatform } from '../../hooks/usePlatform';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { warnOnce } from '../../lib/warnOnce';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { ActionSheetProps } from './ActionSheet';
import './ActionSheet.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  closing: boolean;
  onClose(): void;
  popupDirection?: ActionSheetProps['popupDirection'];
  toggleRef: Element;
}

const warn = warnOnce('ActionSheet');

export const ActionSheetDropdownDesktop: React.FC<Props> = ({
  children,
  toggleRef,
  closing,
  popupDirection,
  onClose,
  ...restProps
}) => {
  const { window, document } = useDOM();
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();
  const elementRef = React.useRef<HTMLDivElement>();

  const [dropdownStyles, setDropdownStyles] = React.useState<React.CSSProperties>({
    left: 0,
    top: 0,
    opacity: 0,
    pointerEvents: 'none',
  });
  useIsomorphicLayoutEffect(() => {
    if (!toggleRef) {
      if (process.env.NODE_ENV === 'development') {
        warn('toggleRef not passed');
      }
      return;
    }

    const toggleRect = toggleRef.getBoundingClientRect();
    const elementRect = elementRef.current.getBoundingClientRect();
    const isTop = popupDirection === 'top' || typeof popupDirection === 'function' && popupDirection(elementRef) === 'top';

    setDropdownStyles({
      left: toggleRect.left + toggleRect.width - elementRect.width + window.pageXOffset,
      top: toggleRect.top + window.pageYOffset + (isTop ? -elementRect.height : toggleRect.height),
    });
  }, [toggleRef]);

  useGlobalEventListener(document.body, 'click', (e) => {
    const dropdownElement = elementRef?.current;
    if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
      onClose();
    }
  });

  return (
    <div
      {...restProps}
      ref={elementRef}
      onClick={(e) => e.stopPropagation()}
      style={dropdownStyles}
      vkuiClass={classNames(getClassName('ActionSheet', platform), 'ActionSheet--desktop', {
        'ActionSheet--closing': closing,
      }, `ActionSheet--sizeY-${sizeY}`)}
    >
      {children}
    </div>
  );
};
