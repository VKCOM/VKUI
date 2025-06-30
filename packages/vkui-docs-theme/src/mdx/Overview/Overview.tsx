'use client';

import * as React from 'react';
import { Button, ButtonGroup } from '@vkontakte/vkui';
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

if (process.env.NODE_ENV !== 'production') {
  OverviewTags.displayName = 'OverviewTags';
  Object.defineProperty(OverviewTags, 'name', {
    value: 'OverviewTags',
  });
}

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

if (process.env.NODE_ENV !== 'production') {
  OverviewTag.displayName = 'OverviewTag';
  Object.defineProperty(OverviewTag, 'name', {
    value: 'OverviewTag',
  });
}

export function Overview({ children }: OverviewProps) {
  return <div className={styles.root}>{children}</div>;
}

if (process.env.NODE_ENV !== 'production') {
  Overview.displayName = 'Overview';
  Object.defineProperty(Overview, 'name', {
    value: 'Overview',
  });

  Overview.Tag = OverviewTag;
  Overview.Tag.displayName = 'Overview.Tag';
  Object.defineProperty(Overview.Tag, 'name', {
    value: 'Overview.Tag',
  });

  Overview.Tags = OverviewTags;
  Overview.Tags.displayName = 'Overview.Tags';
  Object.defineProperty(Overview.Tags, 'name', {
    value: 'Overview.Tags',
  });
}
