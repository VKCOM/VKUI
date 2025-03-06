'use client';

import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Counter,
  Flex,
  Footer,
  Group,
  Search,
  Spinner,
  Title,
} from '../../src';
import { useGetConfigByQuery } from '../common/hooks/useGetConfigByQuery';
import { useGetGlobalParams } from '../common/hooks/useGetGlobalParams';
import { ComponentOverviewCardWrapper } from './components/ComponentOverviewCardWrapper';
import { CONFIG } from './config';
import styles from './ComponentsOverview.module.css';

const filterConfig = (config: typeof CONFIG, query: string) => {
  if (!query) {
    return config;
  }
  const resultConfig: typeof CONFIG = {};
  Object.entries(config).forEach(([groupKey, groupData]) => {
    const validComponents = groupData.components.filter((componentName) => {
      return componentName.toLowerCase().includes(query.toLowerCase());
    });
    if (validComponents.length) {
      resultConfig[groupKey] = {
        title: groupData.title,
        components: validComponents,
      };
    }
  });
  return resultConfig;
};

const ComponentsOverview = () => {
  const {
    query: searchedQuery,
    config,
    loading,
    onUpdateQuery,
  } = useGetConfigByQuery(CONFIG, filterConfig);

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
              <Flex align="center" gap="m">
                <Title level="2">{groupData.title}</Title>
                <Counter size="m" mode="primary" appearance="accent-red">
                  {groupData.components.length}
                </Counter>
              </Flex>
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
