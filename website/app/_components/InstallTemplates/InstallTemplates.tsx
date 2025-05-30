'use client';

import { Banner, type BannerProps, classNames, Headline, SimpleGrid } from '@vkontakte/vkui';
import { NextjsLogo } from './NextjsLogo';
import { ViteLogo } from './ViteLogo';
import styles from './InstallTemplates.module.css';

const appearanceClassNames = {
  purple: styles.purple,
  lime: styles.lime,
};

export function InstallTemplates() {
  return (
    <SimpleGrid gap="2xl" minColWidth={245} margin="auto-block">
      <InstallTemplate
        title="Vite"
        before={<ViteLogo />}
        href="https://github.com/VKCOM/VKUI/tree/master/examples/vkui-vite-ts"
        subtitle={
          <span>
            Используйте шаблон для
            <br />
            быстрого старта SPA-приложений
          </span>
        }
      />
      <InstallTemplate
        title="Next.js"
        appearance="lime"
        before={<NextjsLogo />}
        href="https://github.com/VKCOM/VKUI/tree/master/examples/vkui-nextjs-ts"
        subtitle={
          <span>
            Используйте шаблон для
            <br />
            приложений с поддержкой SSR
          </span>
        }
      />
    </SimpleGrid>
  );
}

function InstallTemplate({
  href,
  title,
  before,
  subtitle,
  appearance = 'purple',
}: Pick<BannerProps, 'title' | 'subtitle' | 'before' | 'href'> & {
  appearance?: 'purple' | 'lime';
}) {
  return (
    <Banner
      before={before}
      mode="image"
      size="m"
      Component="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styles.root}
      hoverMode={styles.hover}
      title={title}
      imageTheme="light"
      subtitle={subtitle}
      actions={
        <Headline>
          Использовать <span className={styles.externalLink}>↗</span>
        </Headline>
      }
      background={
        <div className={classNames(styles.background, appearanceClassNames[appearance])} />
      }
    />
  );
}
