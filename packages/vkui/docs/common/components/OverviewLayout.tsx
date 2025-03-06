'use client';

import * as React from 'react';
import { useMemo } from 'react';
import { Counter, Flex, Footer, Group, Search, Spinner, Title } from '../../../src';
import { useStableCallback } from '../../../src/hooks/useStableCallback';
import { type HasChildren } from '../../../src/types';
import { useGetConfigByQuery } from '../hooks/useGetConfigByQuery';
import { useInfiniteList } from '../hooks/useInfiniteList';
import { GoToUpButton } from './GoToUpButton';
import { OverviewLayoutContext } from './OverviewLayoutContext';
import styles from './OverviewLayout.module.css';

interface Section<T> {
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
  const remapConfigToSections = useStableCallback(remapConfigToSectionsProp);
  const renderSectionItem = useStableCallback(renderSectionItemProp);

  const { config, loading, onUpdateQuery, query } = useGetConfigByQuery(configProp, filterConfig);

  const sections = useMemo(() => remapConfigToSections(config), [config, remapConfigToSections]);

  const { showedSections, showMoreElement } = useInfiniteList(sections);

  return (
    <OverviewLayoutContext.Provider value={{ searchedQuery: query }}>
      <Flex direction="column" gap="2xl" align="start" className={styles.header}>
        <Title>{title}</Title>

        <Group separator="hide">
          <Search noPadding onChange={onUpdateQuery} />
        </Group>

        {additionalHeaderItem}
      </Flex>

      <Flex direction="column" gap="3xl">
        {loading && <Spinner />}
        {!loading && showedSections.length === 0 && <Footer>Ничего не найдено</Footer>}
        {showedSections.map((section) => (
          <Flex key={section.title} direction="column" gap="xl">
            <Flex align="center" gap="m">
              <Title level="2">{section.title}</Title>
              <Counter size="m" mode="primary" appearance="accent-red">
                {section.items.length}
              </Counter>
            </Flex>
            <ItemsContainer>
              {section.items.map((item) => renderSectionItem(item, section))}
            </ItemsContainer>
          </Flex>
        ))}
      </Flex>
      <GoToUpButton />
      {showMoreElement}
    </OverviewLayoutContext.Provider>
  );
};
