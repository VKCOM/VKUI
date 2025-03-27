'use client';

import * as React from 'react';
import { type LinkProps, Link as VKUILink } from '@vkontakte/vkui';
import NextLink from 'next/link';

const EXTERNAL_HREF_REGEX = /https?:\/\//;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <VKUILink {...props} getRootRef={ref} />
));
Link.displayName = 'VKUILinkWithRef';
Object.defineProperty(Link, 'name', {
  value: 'VKUILinkWithRef',
});

export function Anchor({ href = '', children, ...props }: LinkProps) {
  const newWindow = EXTERNAL_HREF_REGEX.test(href);

  if (newWindow) {
    return (
      <Link href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </Link>
    );
  }

  return (
    <NextLink href={href} {...props} passHref legacyBehavior>
      <Link>{children}</Link>
    </NextLink>
  );
}
