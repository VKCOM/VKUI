'use client';

import type * as React from 'react';
import {
  createRef,
  type CSSProperties,
  memo,
  type RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Box, Counter, Flex, Footer, Search, Separator, Spinner, Title } from '../../../src';
import { useManualScroll } from '../../../src/components/AppRoot/ScrollContext';
import { useStableCallback } from '../../../src/hooks/useStableCallback';
import { filterObject } from '../../../src/lib/object';
import type { HasChildren } from '../../../src/types';
import { useGetConfigByQuery } from '../hooks/useGetConfigByQuery';
import { useInfiniteList } from '../hooks/useInfiniteList';
import { GoToUpButton } from './GoToUpButton';
import { OverviewLayoutContext } from './OverviewLayoutContext';
import styles from './OverviewLayout.module.css';

interface Section<T> {
  id: string;
  title: string;
  displayTitle: string;
  items: T[];
}

interface OverviewLayoutProps<CONFIG, ITEM> {
  title?: string | undefined;
  config: CONFIG;
  filterConfig: (config: CONFIG, query: string) => CONFIG;
  normalizeQuery?: ((query: string) => string) | undefined;
  remapConfigToSections: (config: CONFIG) => Array<Section<ITEM>>;
  ItemsContainer: React.ComponentType<HasChildren>;
  renderSectionItem: (item: ITEM, section: Section<ITEM>) => React.ReactElement;
  additionalHeaderItem?: React.ReactElement | undefined;
  headerClassName?: string | undefined;
  contentClassName?: string | undefined;
  loaderClassName?: string | undefined;
  scrollable?: boolean | undefined;
  initialSectionsCount?: number | undefined;
  showSpinner?: boolean | undefined;
  showSectionItemCount?: boolean | undefined;
}

export const OverviewLayout = <CONFIG, ITEM>({
  title,
  config: configProp,
  filterConfig,
  normalizeQuery,
  remapConfigToSections: remapConfigToSectionsProp,
  ItemsContainer,
  renderSectionItem: renderSectionItemProp,
  additionalHeaderItem,
  headerClassName,
  contentClassName,
  loaderClassName,
  scrollable = false,
  initialSectionsCount = 1,
  showSpinner = true,
  showSectionItemCount = true,
}: OverviewLayoutProps<CONFIG, ITEM>) => {
  const sectionsContainerRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [sectionsRefs, setSectionsRefs] = useState<
    Record<string, RefObject<HTMLDivElement | null>>
  >({});
  const remapConfigToSections = useStableCallback(remapConfigToSectionsProp);
  const renderSectionItem = useStableCallback(renderSectionItemProp);

  const { config, loading, onUpdateQuery, query } = useGetConfigByQuery(
    configProp,
    filterConfig,
    normalizeQuery,
  );

  const { scrollTo } = useManualScroll();
  useEffect(() => {
    if (scrollable) {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    } else {
      scrollTo(0, 0);
    }
  }, [query, scrollable, scrollTo]);

  const sections = useMemo(() => remapConfigToSections(config), [config, remapConfigToSections]);

  const { remappedSections, hasMoreSections } = useInfiniteList(
    sections,
    sectionsRefs,
    sectionsContainerRef,
    scrollable ? scrollContainerRef : undefined,
    initialSectionsCount,
  );

  const onSectionRef = useCallback((element: HTMLElement | null, id: string) => {
    const ref = createRef<HTMLDivElement>();
    ref.current = element as HTMLDivElement;
    setSectionsRefs((oldState) => {
      const newState = {
        ...oldState,
        [id]: ref,
      };
      return filterObject(newState, (ref) => !!ref.current);
    });
  }, []);

  const renderItems = useCallback(
    (section: Section<ITEM>) => (
      <ItemsContainer>
        {section.items.map((item) => renderSectionItem(item, section))}
      </ItemsContainer>
    ),
    [ItemsContainer, renderSectionItem],
  );

  return (
    <OverviewLayoutContext.Provider value={{ searchedQuery: query }}>
      <Box padding="system" className={classNames(styles.header, headerClassName)}>
        {title && <Title>{title}</Title>}

        <Search noPadding onChange={onUpdateQuery} />

        {additionalHeaderItem}
      </Box>
      <Separator />

      <Flex
        direction="column"
        gap="3xl"
        noWrap
        className={contentClassName}
        getRootRef={scrollContainerRef}
      >
        {loading && showSpinner && <Spinner />}
        {!loading && sections.length === 0 && <Footer>Ничего не найдено</Footer>}
        <Flex direction="column" gap="3xl" noWrap getRootRef={sectionsContainerRef}>
          {remappedSections.map(({ minHeight, hidden, ...section }) => (
            <Section
              key={section.id}
              hidden={hidden}
              showItemCount={showSectionItemCount}
              sectionData={section}
              onSectionRef={onSectionRef}
              style={{ minHeight }}
              renderItems={renderItems}
            />
          ))}

          {hasMoreSections && <div className={loaderClassName}>{showSpinner && <Spinner />}</div>}
        </Flex>
      </Flex>
      {!scrollable && <GoToUpButton />}
    </OverviewLayoutContext.Provider>
  );
};

const Section = memo<{
  style?: CSSProperties | undefined;
  sectionData: Section<any>;
  hidden?: boolean | undefined;
  showItemCount: boolean;
  onSectionRef: (element: HTMLElement | null, id: string) => void;
  renderItems: (section: Section<any>) => React.ReactNode;
}>(
  ({ style, hidden, showItemCount, sectionData, onSectionRef, renderItems }) => {
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
              <Title level="2">{sectionData.displayTitle}</Title>
              {showItemCount && (
                <Counter size="m" mode="primary" appearance="accent-red">
                  {sectionData.items.length}
                </Counter>
              )}
            </Flex>
            {renderItems(sectionData)}
          </>
        )}
      </Flex>
    );
  },
  (oldProps, newProps) => {
    // Добавляем кастомное сравнение пропов, чтобы максимально уменьшить количество перерисовок компонентов
    return (
      oldProps.sectionData.id === newProps.sectionData.id &&
      oldProps.sectionData.items === newProps.sectionData.items &&
      oldProps.sectionData.displayTitle === newProps.sectionData.displayTitle &&
      oldProps.sectionData.title === newProps.sectionData.title &&
      oldProps.showItemCount === newProps.showItemCount &&
      oldProps.renderItems === newProps.renderItems &&
      oldProps.onSectionRef === newProps.onSectionRef &&
      oldProps.hidden === newProps.hidden &&
      oldProps.style?.minHeight === newProps.style?.minHeight
    );
  },
);

Section.displayName = 'Section';
Object.defineProperty(Section, 'name', {
  value: 'Section',
});
