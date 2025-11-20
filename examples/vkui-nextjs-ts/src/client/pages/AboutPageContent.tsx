'use client';

import { Button, Flex, Title } from '@vkontakte/vkui';
import NextLink from 'next/link';
import Copyright from '@/client/common/Copyright';

export function AboutPageContent() {
  return (
    <Flex direction="column" justify="center" align="center" gap={16}>
      <Title level="3" Component="h1">
        VKUI - Next.js пример на TypeScript
      </Title>
      <Button Component={NextLink} href="/">
        Перейти на домашнюю страницу
      </Button>
      <Copyright />
    </Flex>
  );
}
