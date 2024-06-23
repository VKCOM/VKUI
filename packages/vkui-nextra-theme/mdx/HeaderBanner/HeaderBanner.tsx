import { Button, ButtonGroup, classNames } from '@vkontakte/vkui';
import { Icon20Figma } from '../../icons/Icon20Figma';
import { Icon20GitHub } from '../../icons/Icon20GitHub';
import styles from './HeaderBanner.module.css';

function labelFromHref(href: string) {
  switch (true) {
    case /github\.com\/[\w\d-]+\/[\w\d-]+\/issues/.test(href):
      return 'Issues';
    case /github\.com\/[\w\d-]+\/[\w\d-]+/.test(href):
      return 'Source';
    case href.includes('figma.com'):
      return 'Figma';
  }

  return undefined;
}

function typeFromHref(href: string): 'github' | 'figma' | undefined {
  switch (true) {
    case href.includes('github.com'):
      return 'github';
    case href.includes('figma.com'):
      return 'figma';
  }

  return undefined;
}

function beforeFromType(type: string | undefined) {
  if (!type) {
    return undefined;
  }

  return {
    github: <Icon20GitHub />,
    figma: <Icon20Figma />,
    storybook: <Icon20GitHub />,
  }[type];
}

export interface HeaderBannerLinksProps {
  children: Array<{
    type?: 'github' | 'figma' | 'storybook';
    href: string;
    label?: string;
    before?: React.ReactNode;
  }>;
}

export function Links({ children }: HeaderBannerLinksProps) {
  return (
    <ButtonGroup gap="s" className={styles.buttons}>
      {children.map(({ href, label, before, type }, i) => {
        return (
          <Button
            key={i}
            appearance="accent"
            mode="secondary"
            size="m"
            href={href}
            target="_blank"
            before={before || beforeFromType(type || typeFromHref(href))}
            style={{ lineHeight: 0 }} // FIXME(VKUI): check this
          >
            {label || labelFromHref(href)}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

export function HeaderBanner({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={classNames(className, styles.host, 'vkui--vkBase--dark')} {...props} />;
}

HeaderBanner.Links = Links;
