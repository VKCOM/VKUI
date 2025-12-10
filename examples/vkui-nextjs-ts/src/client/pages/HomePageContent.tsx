'use client';

import * as React from 'react';
import { Flex, Link, Title } from '@vkontakte/vkui';
import NextLink from 'next/link';
import Copyright from '@/client/common/Copyright';
import ProTip from '@/client/common/ProTip';

export function HomePageContent() {
  return (
    <Flex direction="column" justify="center" align="center" gap={16}>
      <Title level="3" Component="h1">
        VKUI — пример использования Next.js App Router на TypeScript
      </Title>
      <Link Component={NextLink} href="/about">
        Перейти на страницу «О проекте»
      </Link>
      <ProTip />
      <Copyright />
    </Flex>
  );
}
