import { Icon24LightbulbOutline } from '@vkontakte/icons';
import { Headline, Link } from '@vkontakte/vkui';
import styles from './ProTip.module.css';

export default function ProTip() {
  return (
    <Headline className={styles.proTip}>
      <Icon24LightbulbOutline className={styles.proTipIcon} />
      {'Совет: посмотрите другие '}
      <Link href="https://vkcom.github.io/VKUI/">шаблоны</Link>
      {' в документации VKUI.'}
    </Headline>
  );
}
