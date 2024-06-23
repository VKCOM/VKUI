import { Chip } from './Chip/Chip';
import styles from './Menu.module.css';

interface MenuPage {
  href: string;
  children: string;
}

export interface MenuProps {
  pages: MenuPage[];
  selectedHref?: string;
}

export function Menu({ pages, selectedHref }: MenuProps) {
  return (
    <nav className={styles.host}>
      {pages.map((props, i) => (
        <Chip key={i} active={selectedHref === props.href} {...props} />
      ))}
    </nav>
  );
}
