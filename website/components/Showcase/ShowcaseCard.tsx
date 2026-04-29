'use client';

import * as React from 'react';
import { Card, Flex, Footnote, PanelSpinner, Tappable, Title } from '@vkontakte/vkui';
import dynamic from 'next/dynamic';
import type { ShowcaseItem } from './types';
import styles from './ShowcaseCard.module.css';

const ShowcaseCardPreview = dynamic(
  () => import('./ShowcaseCardPreview').then((mod) => mod.ShowcaseCardPreview),
  {
    ssr: false,
    loading: () => (
      <Flex
        align="center"
        justify="center"
        position="relative"
        inlineSize="100%"
        blockSize={220}
        overflow="hidden"
      >
        <PanelSpinner visibilityDelay={250} />
      </Flex>
    ),
  },
);

export interface ShowcaseCardProps {
  item: ShowcaseItem;
}

export const ShowcaseCard = React.memo(function ShowcaseCard({ item }: ShowcaseCardProps) {
  return (
    <Card
      Component={(cardProps) => (
        <Flex
          Component={(tappableProps) => <Tappable {...tappableProps} />}
          direction="column"
          flexGrow={1}
          flexShrink={0}
          flexBasis={250}
          minInlineSize={250}
          maxInlineSize={300}
          overflow="hidden"
          {...cardProps}
        />
      )}
      mode="outline-tint"
      className={styles.root}
      aria-label={`Перейти на страницу компонента ${item.name}`}
      tabIndex={0}
      onClickCapture={() => window.open(`/components/${item.slug}/`, '_blank')}
    >
      <ShowcaseCardPreview
        slug={item.slug}
        code={item.code}
        direction={item.direction}
        wrapper={item.wrapper}
      />
      <Flex direction="column" gap="m" paddingBlock="xl" paddingInline="2xl">
        <Title level="3">{item.name}</Title>
        {item.description && <Footnote className={styles.description}>{item.description}</Footnote>}
      </Flex>
    </Card>
  );
});
