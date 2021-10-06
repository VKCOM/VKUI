import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { HasRef, HasRootRef } from '../../types';
import { SplitColContext } from '../SplitCol/SplitCol';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { useDOM } from '../../lib/dom';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { FixedLayoutContext } from './FixedLayoutContext';
import './FixedLayout.css';

export interface FixedLayoutProps extends
  React.HTMLAttributes<HTMLDivElement>,
  HasRootRef<HTMLDivElement>,
  HasRef<HTMLDivElement> {
  vertical?: 'top' | 'bottom';
  /**
   * Это свойство определяет, будет ли фон компонента окрашен в цвет фона контента.
   * Это часто необходимо для фиксированных кнопок в нижней части экрана.
   */
  filled?: boolean;
  portal?: boolean;
}

export interface FixedLayoutState {
  position: 'absolute' | null;
  top: number;
  bottom: number;
  width: string;
}

function FixedLayoutSimple({ children, vertical, getRootRef, getRef, filled, ...restProps }: FixedLayoutProps) {
  const platform = usePlatform();
  return (
    <TooltipContainer
      {...restProps}
      fixed
      ref={getRootRef}
      vkuiClass={classNames(getClassName('FixedLayout', platform), {
        'FixedLayout--filled': filled,
      }, `FixedLayout--${vertical}`)}
    >
      <div vkuiClass="FixedLayout__in" ref={getRef}>{children}</div>
    </TooltipContainer>
  );
}

function FixedLayoutHack(props: FixedLayoutProps) {
  const { scrollCompensation } = React.useContext(FixedLayoutContext);
  const transitionOverrideStyle = React.useMemo<React.CSSProperties>(() => scrollCompensation > 0 ? {
    position: 'absolute',
    top: props.vertical === 'top' ? scrollCompensation : null,
    bottom: props.vertical === 'bottom' ? -scrollCompensation : null,
  } : {}, [scrollCompensation]);

  const [width, setWidth] = React.useState<string>(null);
  const { window } = useDOM();
  const { colRef } = React.useContext(SplitColContext);
  const doResize = () => setWidth(colRef?.current ? `${colRef.current.offsetWidth}px` : null);
  React.useEffect(doResize, []);
  useGlobalEventListener(window, 'resize', doResize);

  return <FixedLayoutSimple {...props} style={{ ...props.style, ...transitionOverrideStyle, width }} />;
}

function FixedLayoutPortal(props: FixedLayoutProps) {
  const { portalEl, itemClass } = React.useContext(FixedLayoutContext);
  const jsx = <FixedLayoutSimple {...props} vkuiClass={itemClass} />;
  return portalEl ? ReactDOM.createPortal(jsx, portalEl) : jsx;
}

const FixedLayout: React.FC<FixedLayoutProps> = ({ portal = true, ...props }: FixedLayoutProps) => {
  return React.createElement(portal ? FixedLayoutPortal : FixedLayoutHack, props);
};

export default FixedLayout;
