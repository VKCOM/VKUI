'use client';

import { useContext } from 'react';
import * as React from 'react';
import { DocsContext } from '@storybook/addon-docs';
import { ArgTypes, DocsContainer } from '@storybook/blocks';
import { vkuiDarkTheme, vkuiLightTheme } from '../../.storybook/addons/storybook-theme/vkuiThemes';
import { AppRoot, ConfigProvider, DisplayTitle, Flex } from '../../src';
import { useGetGlobalParams } from '../common/hooks/useGetGlobalParams';
import { ComponentLinks } from './ComponentLinks';
import { DescriptionBlock } from './DescriptionBlock';
import { SectionGroup } from './SectionGroup';
import { SubcomponentsBlocks } from './SubcomponentsBlocks';
import './ComponentDocsPage.css';

interface ComponentDocsPageProps {
  component: React.ComponentType<any>;
}

export const ComponentDocsPage: React.FC<ComponentDocsPageProps> = ({
  component: parentComponent,
}) => {
  const { colorScheme, direction, platform } = useGetGlobalParams();
  const context = useContext(DocsContext);
  const parentDisplayName = parentComponent.displayName || parentComponent.name;

  return (
    <ConfigProvider colorScheme={colorScheme} platform={platform} direction={direction}>
      <DocsContainer
        context={context}
        theme={colorScheme === 'light' ? vkuiLightTheme : vkuiDarkTheme}
      >
        <AppRoot className="sb-unstyled" dir={direction}>
          <Flex direction="column" gap="xl">
            <DisplayTitle level="1">{parentDisplayName}</DisplayTitle>

            <SectionGroup header="Ссылки">
              <ComponentLinks />
            </SectionGroup>

            <DescriptionBlock component={parentComponent} />

            <SectionGroup header="Свойства">
              <ArgTypes of={parentComponent} />
            </SectionGroup>

            <SubcomponentsBlocks component={parentComponent} />
          </Flex>
        </AppRoot>
      </DocsContainer>
    </ConfigProvider>
  );
};
