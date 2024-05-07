import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Link, type LinkProps } from './Link';

export const LinkFocusVisiblePlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props}>
    {(props: LinkProps) => (
      <div style={{ width: 300, padding: 10 }}>
        Нажимая «Продолжить», вы принимаете&nbsp;
        <Link href="#" {...props}>
          пользовательское соглашение
        </Link>
        ...
      </div>
    )}
  </ComponentPlayground>
);
