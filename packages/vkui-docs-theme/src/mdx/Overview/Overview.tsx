import * as React from 'react';
import { Button, ButtonGroup, ColorSchemeProvider } from '@vkontakte/vkui';
import { FigmaIcon, GithubIcon, StorybookIcon } from '../../icons';
import styles from './Overview.module.css';

export interface OverviewProps {
  children: React.ReactNode;
}

function OverviewTags({ children }: { children: React.ReactNode }) {
  return (
    <ButtonGroup gap="s" className={styles.tags}>
      {children}
    </ButtonGroup>
  );
}
OverviewTags.displayName = 'OverviewTags';

const IconsMap = {
  github: GithubIcon,
  figma: FigmaIcon,
  storybook: StorybookIcon,
};

function OverviewTag({
  children,
  href,
  type = 'github',
}: {
  children: React.ReactNode;
  type: keyof typeof IconsMap;
  href?: string;
}) {
  const Icon = IconsMap[type];
  return (
    <Button mode="secondary" appearance="neutral" size="m" before={<Icon />} href={href}>
      {children}
    </Button>
  );
}
OverviewTag.displayName = 'OverviewTag';

export function Overview({ children }: OverviewProps) {
  return (
    <ColorSchemeProvider value="dark">
      <div className={styles.root}>{children}</div>
    </ColorSchemeProvider>
  );
}

Overview.displayName = 'Overview';

Overview.Tag = OverviewTag;
Overview.Tag.displayName = 'Overview.Tag';

Overview.Tags = OverviewTags;
Overview.Tags.displayName = 'Overview.Tags';
