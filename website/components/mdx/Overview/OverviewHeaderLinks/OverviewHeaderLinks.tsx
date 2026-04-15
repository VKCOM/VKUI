import { Flex, Link, Subhead } from '@vkontakte/vkui';
import { useConfig } from '@vkontakte/vkui-docs-theme';
import { useFSRoute } from 'nextra/hooks';
import { createMdxUrl, createSourceUrl, createStorybookUrl, getComponentName } from './helpers';
import type { OverviewHeaderLinkProps, OverviewHeaderLinksProps } from './types';
import styles from '../Overview.module.css';

export function OverviewHeaderLinks({
  group,
  type = 'component',
  forcedPath,
  forcedName,
  showOnlyMdx,
}: OverviewHeaderLinksProps) {
  const {
    normalizePagesResult: { activeMetadata },
  } = useConfig();
  const fsRoute = useFSRoute();
  const mdxUrl = createMdxUrl(fsRoute);

  if (showOnlyMdx) {
    return (
      <Subhead>
        <Flex className={styles.header} gap="2xl">
          <OverviewHeaderLink href={mdxUrl}>MDX</OverviewHeaderLink>
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
      <Flex className={styles.header} gap="2xl">
        <OverviewHeaderLink href={sourceUrl}>Исходник</OverviewHeaderLink>
        {storybookUrl && <OverviewHeaderLink href={storybookUrl}>Песочница</OverviewHeaderLink>}
        <OverviewHeaderLink href={mdxUrl}>MDX</OverviewHeaderLink>
      </Flex>
    </Subhead>
  );
}

function OverviewHeaderLink({ href, children }: OverviewHeaderLinkProps) {
  return (
    <Link target="_blank" rel="noreferrer" href={href}>
      {children}&nbsp;↗
    </Link>
  );
}
