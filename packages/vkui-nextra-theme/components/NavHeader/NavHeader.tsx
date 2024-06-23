import { AdaptivityProvider } from '@vkontakte/vkui';
import { Logo } from './Logo/Logo';
import { Menu, MenuProps } from './Menu/Menu';
import { ThemeSelect } from './ThemeSelect/ThemeSelect';
import styles from './NavHeader.module.css';

export interface NavHeaderProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
  menu?: MenuProps;
}

export function NavHeader({ before, after, menu }: NavHeaderProps) {
  return (
    <header className={styles.host}>
      <AdaptivityProvider sizeY="compact">
        <div className={styles.inner}>
          <div className={styles.before}>
            <Logo />
            {before}
          </div>
          {menu && <Menu {...menu} />}
          <div className={styles.after}>
            {after}
            <ThemeSelect />
          </div>
        </div>
      </AdaptivityProvider>
    </header>
  );
}
