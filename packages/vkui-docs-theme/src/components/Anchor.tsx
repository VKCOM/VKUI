'use client';

import * as React from 'react';
import { type LinkProps, Link as VKUILink } from '@vkontakte/vkui';
import NextLink from 'next/link';

type NextLinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

// С exactOptionalPropertyTypes типы React.DOMAttributes<HTMLElement> и React.DOMAttributes<HTMLAnchorElement>
// становятся несовместимыми из-за разницы в обработке undefined.
// Используем Omit для удаления конфликтующих свойств и переопределяем их с совместимыми типами.
type AnchorProps = Omit<LinkProps, 'href' | 'as'> & {
  href?: NextLinkProps['href'] | undefined;
  as?: NextLinkProps['as'] | undefined;
};

const EXTERNAL_HREF_REGEX = /https?:\/\//;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <VKUILink {...props} getRootRef={ref} />
));

if (process.env.NODE_ENV !== 'production') {
  Link.displayName = 'VKUILinkWithRef';
  Object.defineProperty(Link, 'name', {
    value: 'VKUILinkWithRef',
  });
}

export function Anchor({ href = '', as, children, ...props }: AnchorProps) {
  if (typeof href === 'string' && (typeof as === 'undefined' || typeof as === 'string')) {
    const newWindow = EXTERNAL_HREF_REGEX.test(href);
    if (newWindow) {
      return (
        <Link href={href} target="_blank" rel="noreferrer" as={as} {...props}>
          {children}&nbsp;↗
        </Link>
      );
    }

    return (
      <Link href={href} Component={NextLink} as={as} {...props}>
        {children}
      </Link>
    );
  }

  // Приводим props к типу, совместимому с NextLink
  // Исключаем href и as из restProps чтобы избежать дублирования
  const nextLinkProps = props as Omit<NextLinkProps, 'href' | 'as'>;
  return <NextLink href={href} {...(as !== undefined && { as })} {...nextLinkProps} />;
}
