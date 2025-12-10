'use client';

import * as React from 'react';
import { Icon16LinkOutline } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { LogoIcon, LogoIconUwu } from '@vkontakte/vkui-docs-theme';
import NextLink from 'next/link';
import { UwuModeSwitcher } from './UwuModeSwitcher.tsx';

function FooterLink({ children, href }: React.PropsWithChildren<{ href: string }>) {
  const isExternal = /^https?:\/\//.test(href);
  const ownProps = isExternal
    ? {
        target: '_blank',
        rel: 'noreferrer',
        after: <Icon16LinkOutline width={14} height={14} />,
      }
    : { Component: NextLink };
  return (
    <Button size="l" href={href} mode="link" appearance="neutral" {...ownProps}>
      {children}
    </Button>
  );
}

export function FooterLinks() {
  return (
    <>
      <LogoIcon width={44} height={23} viewBox="0 0 73 36" />
      <LogoIconUwu />•<FooterLink href="/blog">Блог</FooterLink>•
      <FooterLink href="https://vkcom.github.io/icons/">Иконки</FooterLink>•
      <FooterLink href="https://vkcom.github.io/vkui-tokens/">Токены</FooterLink>•
      <UwuModeSwitcher />
    </>
  );
}
