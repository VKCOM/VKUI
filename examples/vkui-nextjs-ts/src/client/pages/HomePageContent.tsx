'use client';

import Copyright from '@/client/common/Copyright';
import ProTip from '@/client/common/ProTip';
import { Flex, Link, Spacing, Title } from '@vkontakte/vkui';
import NextLink from 'next/link';
import * as React from 'react';

export function HomePageContent() {
  return (
    <Flex direction="column" justify="center" align="center">
      <Title level="3" Component="h1">
        VKUI - Next.js App Router example in TypeScript
      </Title>
      <Spacing />
      <Link Component={NextLink} href="/about">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright />
    </Flex>
  );
}
