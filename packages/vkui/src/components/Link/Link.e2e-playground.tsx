import { Icon16ChainOutline, Icon24ExternalLinkOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Link, type LinkProps } from './Link';

export const LinkFocusVisiblePlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props}>
    {(props: LinkProps) => (
      <div style={{ width: 300, padding: 10 }}>
        Нажимая «Продолжить», вы принимаете{' '}
        <Link href="#" after={<Icon24ExternalLinkOutline width={16} height={16} />} {...props}>
          пользовательское соглашение
        </Link>
        ...
      </div>
    )}
  </ComponentPlayground>
);

export const LinkWithIcons = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props}>
    {() => (
      <>
        <Link
          href="https://google.com"
          target="_blank"
          after={<Icon24ExternalLinkOutline width={16} height={16} />}
        >
          https://google.com
        </Link>
        <br />
        <Link href="/" before={<Icon16ChainOutline />}>
          Главная
        </Link>
        <br />
        <Link
          href="https://vk.com/video807566_169118280"
          target="_blank"
          before={<Icon16ChainOutline />}
          after={<Icon24ExternalLinkOutline width={16} height={16} />}
        >
          Главная в новом окне
        </Link>
      </>
    )}
  </ComponentPlayground>
);
