import * as React from 'react';
import { Flex, Link, Subhead } from '@vkontakte/vkui';
import { useConfig } from '@vkontakte/vkui-docs-theme';
import { createSourceUrl, createStorybookUrl, getComponentName } from './helpers';
import styles from '../Overview.module.css';

export interface OverviewHeaderProps {
  group?:
    | 'layout'
    | 'forms'
    | 'dates'
    | 'buttons'
    | 'navigation'
    | 'feedback'
    | 'modals'
    | 'data-display'
    | 'typography'
    | 'configuration'
    | 'utils';
}

export function OverviewHeader({ group }: OverviewHeaderProps) {
  const config = useConfig();
  const componentName = getComponentName(config.normalizePagesResult.activeMetadata);

  if (!componentName) {
    return null;
  }

  const sourceUrl = createSourceUrl(componentName);
  const storybookUrl = group ? createStorybookUrl(componentName, group) : undefined;

  return (
    <Subhead>
      <Flex className={styles.header} gap="2xl">
        <OverviewHeaderLink href={sourceUrl}>Исходник</OverviewHeaderLink>
        {storybookUrl && <OverviewHeaderLink href={storybookUrl}>Песочница</OverviewHeaderLink>}
      </Flex>
    </Subhead>
  );
}

function OverviewHeaderLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link target="_blank" rel="noreferrer" href={href}>
      {children}&nbsp;↗
    </Link>
  );
}
