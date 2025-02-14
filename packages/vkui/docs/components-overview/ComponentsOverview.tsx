'use client';

import { useContext, useMemo, useState } from 'react';
import { DocsContext } from '@storybook/addon-docs';
import { throttle } from '@vkontakte/vkjs';
import {
  AppRoot,
  type ColorSchemeType,
  ConfigProvider,
  Flex,
  Footer,
  Group,
  type PlatformType,
  Search,
  Spacing,
  Spinner,
  Title,
} from '../../src';
import { type Direction } from '../../src/hooks/useDirection';
import { ComponentOverviewCard } from './components/ComponentOverviewCard';
import { COMPONENTS_DATA, CONFIG } from './config';
import styles from './ComponentsOverview.module.css';

type DocsContextType = {
  store?: {
    userGlobals?: {
      globals?: {
        colorScheme?: string;
        platform?: string;
        direction?: string;
      };
    };
  };
};

const memoizedRenderedNode: Record<string, React.ReactNode> = {};

const getComponentRenderedNode = (componentName: string) => {
  if (memoizedRenderedNode[componentName]) {
    return memoizedRenderedNode[componentName];
  }

  const componentData = COMPONENTS_DATA[componentName];
  const createComponentRender = () => {
    const Component = componentData.component;
    return <Component {...(componentData.args || {})} />;
  };

  const component =
    (componentData.playgroundRender && componentData.playgroundRender(componentData.args || {})) ||
    (componentData.component && createComponentRender()) ||
    null;

  memoizedRenderedNode[componentName] = component;
  return component;
};

const CardWrapper: React.FC<{
  componentName: string;
  groupTitle: string;
  direction: Direction;
}> = ({ componentName, groupTitle, direction }) => {
  const component = getComponentRenderedNode(componentName);
  return (
    <ComponentOverviewCard
      name={componentName}
      group={groupTitle}
      component={component}
      direction={direction}
    />
  );
};

export const ComponentsOverview = () => {
  const context = useContext(DocsContext) as DocsContextType;
  const theme = (context?.store?.userGlobals?.globals?.colorScheme as ColorSchemeType) || 'light';
  const platform = (context?.store?.userGlobals?.globals?.platform as PlatformType) || 'vkcom';
  const direction = (context?.store?.userGlobals?.globals?.direction as Direction) || 'ltr';

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const _updateQuery = useMemo(() => {
    return throttle((newValue) => {
      setQuery(newValue);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredConfig: typeof CONFIG = useMemo(() => {
    if (!query) {
      return CONFIG;
    }
    const resultConfig: typeof CONFIG = {};
    Object.entries(CONFIG).forEach(([groupKey, groupData]) => {
      const validComponents = groupData.components.filter((componentName) => {
        return componentName.includes(query);
      });
      if (validComponents.length) {
        resultConfig[groupKey] = {
          title: groupData.title,
          components: validComponents,
        };
      }
    });
    return resultConfig;
  }, [query]);

  return (
    <ConfigProvider colorScheme={theme} platform={platform}>
      <AppRoot className="sb-unstyled" dir={direction}>
        <Title>Витрина компонентов</Title>
        <Spacing size="xl" />

        <Group separator="hide">
          <Search
            noPadding
            onChange={(e) => {
              setLoading(true);
              _updateQuery(e.target.value);
            }}
          />
        </Group>

        <Spacing size="xl" />

        <Flex direction="column" gap="3xl">
          {loading && <Spinner />}
          {!loading && !Object.values(filteredConfig).length && <Footer>Ничего не найдено</Footer>}
          {Object.entries(filteredConfig).map(([groupKey, groupData]) => {
            return (
              <Flex key={groupKey} direction="column" gap="xl">
                <Title level="2">{groupData.title}</Title>
                <ul className={styles.cardsContainer}>
                  {groupData.components.map((componentName) => (
                    <CardWrapper
                      key={componentName}
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
    </ConfigProvider>
  );
};
