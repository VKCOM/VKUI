'use client';

import Copyright from '@/client/common/Copyright';
import ProTip from '@/client/common/ProTip';
import { Button, Flex, Spacing, Title } from '@vkontakte/vkui';
import NextLink from 'next/link';

export function AboutPageContent() {
  return (
    <Flex direction="column" justify="center" align="center">
      <Title level="3" Component="h1">
        VKUI - Next.js example in TypeScript
      </Title>
      <Spacing />
      <Button Component={NextLink} href="/">
        Go to the home page
      </Button>
      <ProTip />
      <Copyright />
    </Flex>
  );
}
