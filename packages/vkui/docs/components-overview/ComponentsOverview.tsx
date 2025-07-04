'use client';

import { AdaptivityProvider, AppRoot, ConfigProvider } from '../../src';
import { OverviewLayout } from '../common/components/OverviewLayout';
import { useGetGlobalParams } from '../common/hooks/useGetGlobalParams';
import { ComponentOverviewCardWrapper } from './components/ComponentOverviewCardWrapper';
import { CONFIG } from './config';
import styles from './ComponentsOverview.module.css';

const filterConfig = (config: typeof CONFIG, query: string) => {
  if (!query) {
    return config;
  }
  const resultConfig: typeof CONFIG = [];
  config.forEach((groupData) => {
    const validComponents = groupData.components.filter((componentName) => {
      return componentName.toLowerCase().includes(query);
    });
    if (validComponents.length) {
      resultConfig.push({
        title: groupData.title,
        displayTitle: groupData.displayTitle,
        components: validComponents,
      });
    }
  });
  return resultConfig;
};

const ComponentsOverview = () => {
  return (
    <OverviewLayout
      title="Витрина компонентов"
      config={CONFIG}
      filterConfig={filterConfig}
      remapConfigToSections={(config) =>
        config.map((groupData) => ({
          id: groupData.title,
          title: groupData.title,
          displayTitle: groupData.displayTitle,
          items: groupData.components,
        }))
      }
      ItemsContainer={({ children }) => <div className={styles.cardsContainer}>{children}</div>}
      renderSectionItem={(componentName, groupData) => (
        <ComponentOverviewCardWrapper
          key={componentName}
          componentName={componentName}
          groupTitle={groupData.title}
        />
      )}
    />
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
