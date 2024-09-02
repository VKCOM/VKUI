import * as React from 'react';
import { Icon16Spinner, Icon24Spinner, Icon32Spinner, Icon44Spinner } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useReducedMotion } from '../../lib/animation';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Spinner.module.css';

export interface SpinnerProps extends HTMLAttributesWithRootRef<HTMLSpanElement> {
  size?: 'small' | 'regular' | 'medium' | 'large';
  disableAnimation?: boolean;
  /**
   * Задать цвет можно будет через свойство color родителя
   */
  noColor?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Spinner
 */
export const Spinner: React.FC<SpinnerProps> = React.memo(
  ({
    size = 'regular',
    children = 'Загружается...',
    disableAnimation = false,
    noColor = false,
    ...restProps
  }: SpinnerProps) => {
    const isReducedMotion = useReducedMotion();
    const SpinnerIcon = {
      small: Icon16Spinner,
      regular: Icon24Spinner,
      medium: Icon32Spinner,
      large: Icon44Spinner,
    }[size];
    let svgAnimateElement: React.ReactNode = null;

    const [isReadyForSetSVGAnimateElement, setIsReadyForSetSVGAnimateElement] = React.useState(
      disableAnimation ? true : false,
    );

    React.useEffect(function waitReactHydrationBeforeSetSVGAnimateElement() {
      setIsReadyForSetSVGAnimateElement(true);
    }, []);

    if (isReadyForSetSVGAnimateElement && !disableAnimation) {
      if (isReducedMotion) {
        svgAnimateElement = (
          <animate
            attributeName="opacity"
            keyTimes="0; 0.5; 1"
            values="1; 0.1; 1"
            begin="0s"
            dur="2s"
            repeatCount="indefinite"
          />
        );
      } else {
        const center = { small: 8, regular: 12, medium: 16, large: 22 }[size];
        svgAnimateElement = (
          <animateTransform
            attributeType="XML"
            attributeName="transform"
            type="rotate"
            from={`0 ${center} ${center}`}
            to={`360 ${center} ${center}`}
            dur="0.7s"
            repeatCount="indefinite"
          />
        );
      }
    }

    return (
      <RootComponent
        Component="span"
        role="status"
        {...restProps}
        baseClassName={classNames(styles['Spinner'], noColor && styles['Spinner--no-color'])}
      >
        <SpinnerIcon>{svgAnimateElement}</SpinnerIcon>
        {hasReactNode(children) && <VisuallyHidden>{children}</VisuallyHidden>}
      </RootComponent>
    );
  },
);

Spinner.displayName = 'Spinner';
