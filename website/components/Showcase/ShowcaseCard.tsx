'use client';

import * as React from 'react';
import { Card, Flex, Footnote, PanelSpinner, Tappable, Title } from '@vkontakte/vkui';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { getComponentDocsUrl } from './getComponentDocsUrl';
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
  const router = useRouter();

  return (
    <Card
      Component={Tappable}
      mode="outline-tint"
      className={styles.root}
      aria-label={`Перейти на страницу компонента ${item.name}`}
      onClick={() => router.push(getComponentDocsUrl(item.name))}
    >
      <Flex
        direction="column"
        inlineSize="100%"
        blockSize="100%"
        padding="s"
        overflow="hidden"
        className={styles.inheritBorderRadius}
      >
        <ShowcaseCardPreview
          slug={item.slug}
          code={item.code}
          direction={item.direction}
          wrapper={item.wrapper}
        />
        <Flex direction="column" gap="m" paddingBlock="xl" paddingInline="m">
          <Title level="3">{item.name}</Title>
          {item.description && (
            <Footnote className={styles.description}>{item.description}</Footnote>
          )}
        </Flex>
      </Flex>
    </Card>
  );
});
