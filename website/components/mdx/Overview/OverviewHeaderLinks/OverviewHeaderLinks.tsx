import { Flex, Subhead } from '@vkontakte/vkui';
import { useConfig } from '@vkontakte/vkui-docs-theme';
import { useFSRoute } from 'nextra/hooks';
import { OverviewHeaderActions } from './OverviewHeaderActions/OverviewHeaderActions';
import { OverviewHeaderLink } from './OverviewHeaderLink/OverviewHeaderLink';
import {
  createMdxUrl,
  createPageUrl,
  createSourceUrl,
  createStorybookHomeUrl,
  createStorybookUrl,
  getComponentName,
} from './helpers';
import type { OverviewHeaderLinksProps } from './types';
import styles from '../Overview.module.css';

export function OverviewHeaderLinks({
  group,
  type = 'component',
  forcedPath,
  forcedName,
}: OverviewHeaderLinksProps) {
  const {
    normalizePagesResult: { activeMetadata },
  } = useConfig();
  const fsRoute = useFSRoute();

  if (fsRoute === '/blog') {
    return null;
  }

  const pageUrl = createPageUrl(fsRoute);
  const mdxUrl = createMdxUrl(fsRoute);

  if (type === 'doc') {
    return (
      <Subhead>
        <Flex className={styles.header} gap="2xl" justify="space-between">
          <OverviewHeaderLink href={createStorybookHomeUrl()}>Песочница</OverviewHeaderLink>
          <OverviewHeaderActions pageUrl={pageUrl} mdxUrl={mdxUrl} />
        </Flex>
      </Subhead>
    );
  }

  const componentName = getComponentName(activeMetadata);

  if (!componentName) {
    return null;
  }

  const sourceUrl = createSourceUrl(componentName, type, forcedPath);
  const storybookUrl = group ? createStorybookUrl(forcedName || componentName, group) : undefined;

  return (
    <Subhead>
      <Flex className={styles.header} justify="space-between">
        <Flex gap="2xl">
          <OverviewHeaderLink href={sourceUrl}>Исходник</OverviewHeaderLink>
          {storybookUrl && <OverviewHeaderLink href={storybookUrl}>Песочница</OverviewHeaderLink>}
        </Flex>
        <OverviewHeaderActions pageUrl={pageUrl} mdxUrl={mdxUrl} />
      </Flex>
    </Subhead>
  );
}
