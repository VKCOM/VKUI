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
import { ComponentOverviewCardWrapper } from './components/ComponentOverviewCardWrapper';
import { useGetConfigByQuery } from './hooks/useGetConfigByQuery';
import { useGetGlobalParams } from './hooks/useGetGlobalParams';
import styles from './ComponentsOverview.module.css';

const ComponentsOverview = () => {
  const { query: searchedQuery, config, loading, onUpdateQuery } = useGetConfigByQuery();

  return (
    <>
      <Flex direction="column" gap="2xl" align="start" className={styles.header}>
        <Title>Витрина компонентов</Title>

        <Group separator="hide">
          <Search noPadding onChange={onUpdateQuery} />
        </Group>
      </Flex>

      <Flex direction="column" gap="3xl">
        {loading && <Spinner />}
        {!loading && !Object.values(config).length && <Footer>Ничего не найдено</Footer>}
        {Object.entries(config).map(([groupKey, groupData]) => {
          return (
            <Flex key={groupKey} direction="column" gap="xl">
              <Title level="2">{groupData.title}</Title>
              <div className={styles.cardsContainer}>
                {groupData.components.map((componentName) => (
                  <ComponentOverviewCardWrapper
                    key={componentName}
                    searchedQuery={searchedQuery}
                    componentName={componentName}
                    groupTitle={groupData.title}
                  />
                ))}
              </div>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export const ComponentsOverviewPage = () => {
  const { colorScheme, platform, direction, hasCustomPanelHeaderAfter, hasPointer } =
    useGetGlobalParams();

  return (
    <ConfigProvider
      colorScheme={colorScheme}
      platform={platform}
      hasCustomPanelHeaderAfter={hasCustomPanelHeaderAfter}
      direction={direction}
    >
      <AdaptivityProvider hasPointer={hasPointer}>
        <AppRoot className="sb-unstyled" dir={direction}>
          <ComponentsOverview />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
