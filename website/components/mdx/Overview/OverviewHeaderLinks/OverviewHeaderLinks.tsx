import { Flex, Link, Subhead } from '@vkontakte/vkui';
import { useConfig } from '@vkontakte/vkui-docs-theme';
import { createSourceUrl, createStorybookUrl, getComponentName } from './helpers';
import type { OverviewHeaderLinkProps, OverviewHeaderLinksProps } from './types';
import styles from '../Overview.module.css';

export function OverviewHeaderLinks({
  group,
  type = 'component',
  forcedPath,
}: OverviewHeaderLinksProps) {
  const {
    normalizePagesResult: { activeMetadata },
  } = useConfig();

  const componentName = getComponentName(activeMetadata);

  if (!componentName) {
    return null;
  }

  const sourceUrl = createSourceUrl(componentName, type, forcedPath);
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

function OverviewHeaderLink({ href, children }: OverviewHeaderLinkProps) {
  return (
    <Link target="_blank" rel="noreferrer" href={href}>
      {children}&nbsp;↗
    </Link>
  );
}
