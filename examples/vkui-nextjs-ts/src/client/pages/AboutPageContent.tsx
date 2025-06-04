'use client';

import { Button, Flex, Spacing, Title } from '@vkontakte/vkui';
import NextLink from 'next/link';
import Copyright from '@/client/common/Copyright';
import ProTip from '@/client/common/ProTip';

export function AboutPageContent() {
  return (
    <Flex direction="column" justify="center" align="center">
      <Title level="3" Component="h1">
        VKUI - Next.js пример на TypeScript
      </Title>
      <Spacing />
      <Button Component={NextLink} href="/">
        Перейти на домашнюю страницу
      </Button>
      <ProTip />
      <Copyright />
    </Flex>
  );
}
