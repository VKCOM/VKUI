import { Icon24LightbulbOutline } from '@vkontakte/icons';
import { Headline, Link } from '@vkontakte/vkui';
import styles from './ProTip.module.css';

export default function ProTip() {
  return (
    <Headline className={styles.proTip}>
      <Icon24LightbulbOutline className={styles.proTipIcon} />
      {'Pro tip: See more '}
      <Link href="https://vkcom.github.io/VKUI/">templates</Link>
      {' in the Material UI documentation.'}
    </Headline>
  );
}
