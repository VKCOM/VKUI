'use client';

import * as React from 'react';
import {
  createRef,
  type CSSProperties,
  memo,
  type RefObject,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { Counter, Flex, Footer, Group, Search, Spinner, Title } from '../../../src';
import { useStableCallback } from '../../../src/hooks/useStableCallback';
import { type HasChildren } from '../../../src/types';
import { useGetConfigByQuery } from '../hooks/useGetConfigByQuery';
import { useInfiniteList } from '../hooks/useInfiniteList';
import { GoToUpButton } from './GoToUpButton';
import { OverviewLayoutContext } from './OverviewLayoutContext';
import styles from './OverviewLayout.module.css';

interface Section<T> {
  id: string;
  title: string;
  items: T[];
}

interface OverviewLayoutProps<CONFIG, ITEM> {
  title: string;
  config: CONFIG;
  filterConfig: (config: CONFIG, query: string) => CONFIG;
  remapConfigToSections: (config: CONFIG) => Array<Section<ITEM>>;
  ItemsContainer: React.ComponentType<HasChildren>;
  renderSectionItem: (item: ITEM, section: Section<ITEM>) => React.ReactElement;
  additionalHeaderItem?: React.ReactElement;
}

export const OverviewLayout = <CONFIG, ITEM>({
  title,
  config: configProp,
  filterConfig,
  remapConfigToSections: remapConfigToSectionsProp,
  ItemsContainer,
  renderSectionItem: renderSectionItemProp,
  additionalHeaderItem,
}: OverviewLayoutProps<CONFIG, ITEM>) => {
  const sectionsContainerRef = useRef<HTMLElement | null>(null);
  const sectionsRefs = useRef<Record<string, RefObject<HTMLDivElement | null>>>({});
  const remapConfigToSections = useStableCallback(remapConfigToSectionsProp);
  const renderSectionItem = useStableCallback(renderSectionItemProp);

  const { config, loading, onUpdateQuery, query } = useGetConfigByQuery(configProp, filterConfig);

  const sections = useMemo(() => {
    sectionsRefs.current = {};
    return remapConfigToSections(config);
  }, [config, remapConfigToSections]);

  const { remappedSections, showMoreElement } = useInfiniteList(
    sections,
    sectionsRefs.current,
    sectionsContainerRef,
  );

  const onSectionRef = useCallback((element: HTMLElement | null, id: string) => {
    const ref = createRef<HTMLDivElement>();
    ref.current = element as HTMLDivElement;
    sectionsRefs.current[id] = ref;
  }, []);

  return (
    <OverviewLayoutContext.Provider value={{ searchedQuery: query }}>
      <Flex direction="column" gap="2xl" align="start" className={styles.header}>
        <Title>{title}</Title>

        <Group separator="hide">
          <Search noPadding onChange={onUpdateQuery} />
        </Group>

        {additionalHeaderItem}
      </Flex>

      <Flex direction="column" gap="3xl" getRootRef={sectionsContainerRef}>
        {loading && <Spinner />}
        {!loading && sections.length === 0 && <Footer>Ничего не найдено</Footer>}
        {remappedSections.map(({ minHeight, hidden, ...section }) => (
          <Section
            key={section.id}
            hidden={hidden}
            sectionData={section}
            onSectionRef={onSectionRef}
            style={{ minHeight }}
            ItemsRenderer={({ section }) => (
              <ItemsContainer>
                {section.items.map((item) => renderSectionItem(item, section))}
              </ItemsContainer>
            )}
          />
        ))}
      </Flex>
      <GoToUpButton />
      {showMoreElement}
    </OverviewLayoutContext.Provider>
  );
};

const Section = memo<{
  style?: CSSProperties;
  sectionData: Section<any>;
  hidden?: boolean;
  onSectionRef: (element: HTMLElement | null, id: string) => void;
  ItemsRenderer: React.ComponentType<{ section: Section<any> }>;
}>(
  ({ style, hidden, sectionData, onSectionRef, ItemsRenderer }) => {
    const _onSectionRef = useCallback(
      (element: HTMLElement | null) => {
        onSectionRef(element, sectionData.id);
      },
      [sectionData.id, onSectionRef],
    );

    return (
      <Flex direction="column" gap="xl" getRootRef={_onSectionRef} style={style}>
        {hidden ? null : (
          <>
            <Flex align="center" gap="m">
              <Title level="2">{sectionData.title}</Title>
              <Counter size="m" mode="primary" appearance="accent-red">
                {sectionData.items.length}
              </Counter>
            </Flex>
            <ItemsRenderer section={sectionData} />
          </>
        )}
      </Flex>
    );
  },
  (oldProps, newProps) => {
    // Добавляем кастомное сравнение пропов, чтобы максимально уменьшить количество перерисовок компонентов
    return (
      oldProps.sectionData.id === newProps.sectionData.id &&
      oldProps.sectionData.items.length === newProps.sectionData.items.length &&
      oldProps.onSectionRef === newProps.onSectionRef &&
      oldProps.hidden === newProps.hidden &&
      oldProps.style?.minHeight === newProps.style?.minHeight
    );
  },
);

Section.displayName = 'Section';
