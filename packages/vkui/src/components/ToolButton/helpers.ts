import styles from './ToolButton.module.css';

export function getRoundedClassName(
  direction: 'row' | 'column',
  hasChildren: boolean,
): string | undefined {
  switch (direction) {
    case 'row':
      return styles.rounded;
    case 'column':
      return hasChildren ? undefined : styles.rounded;
  }
}
