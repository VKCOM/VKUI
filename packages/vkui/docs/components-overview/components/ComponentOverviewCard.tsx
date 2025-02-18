'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Card, Mark, Title } from '../../../src';
import { type Direction } from '../../../src/hooks/useDirection';
import { useResizeObserver } from '../../../src/hooks/useResizeObserver';
import { useDOM } from '../../../src/lib/dom';
import { type CSSCustomProperties } from '../../../src/types';
import { type ComponentConfigData } from '../config';
import styles from './ComponentOverviewCard.module.css';

const CONTENT_PADDING = 10;

export type ComponentOverviewCardProps = Pick<
  ComponentConfigData,
  'customPath' | 'minWidth' | 'maxWidth'
> & {
  componentName: string;
  searchedQuery: string;
  groupTitle: string;
  direction: Direction;

  component: React.ReactNode;
};

const TitleWithSearch: React.FC<{ searchedQuery: string; name: string }> = ({
  searchedQuery,
  name,
}) => {
  const indexOfQuery = name.toLowerCase().indexOf(searchedQuery.toLowerCase());
  const head = name.slice(0, indexOfQuery);
  const content = name.slice(indexOfQuery, indexOfQuery + searchedQuery.length);
  const tail = name.slice(indexOfQuery + searchedQuery.length);

  return (
    <Title level="3" className={styles.title}>
      {head}
      <Mark>{content}</Mark>
      {tail}
    </Title>
  );
};

export const ComponentOverviewCard: React.FC<ComponentOverviewCardProps> = ({
  component,
  componentName,
  customPath,
  searchedQuery,
  groupTitle,
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

    const maxWidth = container.clientWidth - CONTENT_PADDING * 2;
    const maxHeight = container.clientHeight - CONTENT_PADDING * 2;

    const scaleX = maxWidth / component.offsetWidth;
    const scaleY = maxHeight / component.offsetHeight;
    const newScale = Math.min(scaleX, scaleY, 1);

    setScale(newScale);
  }, [window]);

  React.useEffect(() => calculateScale(), [calculateScale]);

  useResizeObserver(containerRef, calculateScale);

  const createComponentUrl = React.useCallback(
    (name: string, group: string, customPath?: string) => {
      if (!window) {
        return '';
      }
      const baseUrl = `${window.location.href.split('iframe')[0]}`;
      const componentUrl = customPath ? customPath.replace('/', '-') : name;
      return `${baseUrl}?path=/story/${group.toLowerCase()}-${componentUrl.toLowerCase()}--playground`;
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
      href={createComponentUrl(componentName, groupTitle, customPath)}
      mode="shadow"
      className={classNames(styles.card, direction === 'rtl' && styles.rtl)}
      style={style}
    >
      {searchedQuery ? (
        <TitleWithSearch searchedQuery={searchedQuery} name={componentName} />
      ) : (
        <Title level="3" className={styles.title}>
          {componentName}
        </Title>
      )}
      <div
        className={styles.componentWrapper}
        ref={containerRef}
        aria-label={`${componentName} component preview`}
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
