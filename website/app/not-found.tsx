'use client';

import { Button, Placeholder } from '@vkontakte/vkui';
import NextLink from 'next/link';
import { Icon120IllustrationSpottyDetective } from './_components/Icon120IllustrationSpottyDetective';

export default function NotFound() {
  return (
    <Placeholder
      icon={<Icon120IllustrationSpottyDetective />}
      title="Такой страницы нет"
      action={
        <Button Component={NextLink} href="/" size="m">
          На главную
        </Button>
      }
      style={{
        flex: '1 0',
        height: 'calc(100vh - var(--vkui_docs--navbar-height) - var(--vkui_docs--footer-height))',
      }}
    />
  );
}
