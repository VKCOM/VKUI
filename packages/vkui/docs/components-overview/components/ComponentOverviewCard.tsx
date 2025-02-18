'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Title } from '../../../src';
import { Card } from '../../../src/components/Card/Card';
import { type Direction } from '../../../src/hooks/useDirection';
import { useResizeObserver } from '../../../src/hooks/useResizeObserver';
import { useDOM } from '../../../src/lib/dom';
import { type CSSCustomProperties } from '../../../src/types';
import styles from './ComponentOverviewCard.module.css';

type CardProps = {
  component: React.ReactNode;
  name: string;
  group: string;
  direction: Direction;
  minWidth?: number;
  maxWidth?: number;
};

export const ComponentOverviewCard: React.FC<CardProps> = ({
  component,
  name,
  group,
  direction,
  minWidth,
  maxWidth,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const componentRef = React.useRef<HTMLDivElement>(null);
  const { window } = useDOM();
  const [scale, setScale] = React.useState(1);

  const calculateScale = React.useCallback(() => {
    const container = containerRef.current;
    const component = componentRef.current;
    if (!container || !window || !component) {
      return;
    }
    const padding = 10;

    const maxWidth = container.clientWidth - padding * 2;
    const maxHeight = container.clientHeight - padding * 2;

    const scaleX = maxWidth / component.offsetWidth;
    const scaleY = maxHeight / component.offsetHeight;
    const newScale = Math.min(scaleX, scaleY, 1);

    setScale(newScale);
  }, [window]);

  React.useEffect(() => calculateScale(), [calculateScale]);

  useResizeObserver(containerRef, calculateScale);

  const createComponentUrl = React.useCallback(
    (componentName: string, group: string) => {
      if (!window) {
        return '';
      }
      const baseUrl = `${window.location.href.split('iframe')[0]}`;
      return `${baseUrl}?path=/story/${group.toLowerCase()}-${componentName.toLowerCase()}--playground`;
    },
    [window],
  );

  const style: CSSCustomProperties = {
    '--vkui_internal--ComponentOverviewCard_scale': String(scale),
  };

  return (
    <Card
      Component="a"
      // @ts-expect-error: TS2322 в CardProps нет href свойства
      href={createComponentUrl(name, group)}
      mode="shadow"
      className={classNames(styles.card, direction === 'rtl' && styles.rtl)}
      style={style}
    >
      <Title level="3" className={styles.title}>
        {name}
      </Title>
      <div
        className={styles.componentWrapper}
        ref={containerRef}
        aria-label={`${name} component preview`}
        // @ts-expect-error: TS2322 пока react нормально не поддерживает этот атрибут
        inert=""
      >
        <div
          className={styles.componentContainer}
          ref={componentRef}
          style={{ minWidth, maxWidth }}
        >
          {component}
        </div>
      </div>
    </Card>
  );
};
