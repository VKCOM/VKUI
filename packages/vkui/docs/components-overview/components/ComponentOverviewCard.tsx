'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Title } from '../../../src';
import { Card } from '../../../src/components/Card/Card';
import { type Direction } from '../../../src/hooks/useDirection';
import { useDOM } from '../../../src/lib/dom';
import { type CSSCustomProperties } from '../../../src/types';
import styles from './ComponentOverviewCard.module.css';

type CardProps = {
  component: React.ReactNode;
  name: string;
  group: string;
  direction: Direction;
};

export const ComponentOverviewCard: React.FC<CardProps> = ({
  component,
  name,
  group,
  direction,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const componentRef = React.useRef<HTMLDivElement>(null);
  const { window } = useDOM();
  const [scale, setScale] = React.useState(1);
  const [originalSize, setOriginalSize] = React.useState({ width: 0, height: 0 });

  // Измеряем оригинальные размеры компонента без трансформаций
  React.useEffect(() => {
    if (!componentRef.current) {
      return;
    }

    const componentEl = componentRef.current;
    const originalTransform = componentEl.style.transform;

    // Временно сбрасываем трансформации для измерения
    componentEl.style.transform = 'translate(-50%, -50%) scale(1)';
    const rect = componentEl.getBoundingClientRect();
    setOriginalSize({ width: rect.width, height: rect.height });

    // Восстанавливаем трансформации
    componentEl.style.transform = originalTransform;
  }, [component]);

  // Подписываемся на изменения размеров контейнера
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container || originalSize.width === 0 || originalSize.height === 0 || !window) {
      return;
    }

    const calculateScale = () => {
      const maxWidth = container.clientWidth;
      const maxHeight = container.clientHeight;

      const scaleX = maxWidth / originalSize.width;
      const scaleY = maxHeight / originalSize.height;
      const newScale = Math.min(scaleX, scaleY, 1);

      setScale(newScale);
    };

    calculateScale();

    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, [originalSize, window]);

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

  const openUrl = React.useCallback(() => {
    const url = createComponentUrl(name, group);
    window?.open(url);
  }, [createComponentUrl, group, name, window]);

  const style: CSSCustomProperties = {
    '--vkui_internal--ComponentOverviewCard_scale': String(scale),
  };

  return (
    <Card
      mode="shadow"
      className={classNames(styles.card, direction === 'rtl' && styles.rtl)}
      onClick={openUrl}
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
        <div className={styles.componentContainer} ref={componentRef}>
          {component}
        </div>
      </div>
    </Card>
  );
};
