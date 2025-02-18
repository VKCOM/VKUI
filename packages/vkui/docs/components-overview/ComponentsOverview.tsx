'use client';

import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Flex,
  Footer,
  Group,
  Search,
  Spinner,
  Title,
} from '../../src';
import { FlexItem } from '../../src/components/Flex/FlexItem/FlexItem';
import { ComponentOverviewCardWrapper } from './components/ComponentOverviewCardWrapper';
import { useGetConfigByQuery } from './hooks/useGetConfigByQuery';
import { useGetGlobalParams } from './hooks/useGetGlobalParams';
import styles from './ComponentsOverview.module.css';

export const ComponentsOverview = () => {
  const { colorScheme, platform, direction, hasCustomPanelHeaderAfter, hasPointer } =
    useGetGlobalParams();
  const { query: searchedQuery, config, loading, onUpdateQuery } = useGetConfigByQuery();

  return (
    <ConfigProvider
      colorScheme={colorScheme}
      platform={platform}
      hasCustomPanelHeaderAfter={hasCustomPanelHeaderAfter}
    >
      <AdaptivityProvider hasPointer={hasPointer}>
        <AppRoot className="sb-unstyled" dir={direction}>
          <Flex direction="column" gap="2xl" align="start" className={styles.header}>
            <FlexItem>
              <Title>Витрина компонентов</Title>
            </FlexItem>

            <FlexItem>
              <Group separator="hide">
                <Search noPadding onChange={onUpdateQuery} />
              </Group>
            </FlexItem>
          </Flex>

          <Flex direction="column" gap="3xl">
            {loading && <Spinner />}
            {!loading && !Object.values(config).length && <Footer>Ничего не найдено</Footer>}
            {Object.entries(config).map(([groupKey, groupData]) => {
              return (
                <Flex key={groupKey} direction="column" gap="xl">
                  <Title level="2">{groupData.title}</Title>
                  <ul className={styles.cardsContainer}>
                    {groupData.components.map((componentName) => (
                      <ComponentOverviewCardWrapper
                        key={componentName}
                        searchedQuery={searchedQuery}
                        componentName={componentName}
                        groupTitle={groupData.title}
                        direction={direction}
                      />
                    ))}
                  </ul>
                </Flex>
              );
            })}
          </Flex>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
