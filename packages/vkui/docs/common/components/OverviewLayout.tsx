'use client';

import * as React from 'react';
import { type ChangeEvent } from 'react';
import { Counter, Flex, Footer, Group, Search, Spinner, Title } from '../../../src';
import { type HasChildren } from '../../../src/types';
import { useInfiniteList } from '../../icons-overview/hooks/useInfiniteList';
import styles from './OverviewLayout.module.css';

interface Section<T> {
  title: string;
  items: T[];
}

interface OverviewLayoutProps<ITEM> {
  title: string;
  additionalHeaderItem?: React.ReactElement;
  loading: boolean;
  onUpdateQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  sections: Array<Section<ITEM>>;
  ItemsContainer: React.ComponentType<HasChildren>;
  renderSectionItem: (item: ITEM, section: Section<ITEM>) => React.ReactElement;
}

export const OverviewLayout = <ITEM,>({
  title,
  loading,
  onUpdateQuery,
  sections,
  ItemsContainer,
  renderSectionItem,
  additionalHeaderItem,
}: OverviewLayoutProps<ITEM>) => {
  const { showedSections, showMoreElement } = useInfiniteList(sections);

  return (
    <>
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
      {showMoreElement}
    </>
  );
};
