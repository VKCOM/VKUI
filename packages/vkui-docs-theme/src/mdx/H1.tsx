import styles from './index.module.css';

export function H1(props: React.ComponentProps<'h1'>) {
  return <h1 className={styles.h1} {...props} />;
}
