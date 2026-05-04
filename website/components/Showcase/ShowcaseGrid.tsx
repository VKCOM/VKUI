'use client';

import * as React from 'react';
import { Flex, Title } from '@vkontakte/vkui';
import showcaseData from '@/generated/showcase-data.json';
import { ShowcaseCard } from './ShowcaseCard';
import type { ShowcaseData } from './types';

const data = showcaseData as ShowcaseData;

export function ShowcaseGrid() {
  return (
    <Flex direction="column" gap="4xl" paddingBlock="4xl">
      <Flex direction="column" gap="4xl">
        {data.groups.map((group) => (
          <Flex key={group.key} Component="section" direction="column" gap="2xl" id={group.key}>
            <Title level="2">{group.title}</Title>
            <Flex Component="ul" gap="3xl" margin="none" padding={0} align="stretch">
              {group.items.map((item) => (
                <ShowcaseCard key={item.slug} item={item} />
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
