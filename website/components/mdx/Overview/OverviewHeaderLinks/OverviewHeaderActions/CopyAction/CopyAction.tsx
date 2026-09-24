import { Icon20ChecksOutline } from '@vkontakte/icons';
import { Button, classNames } from '@vkontakte/vkui';
import { actionButtonProps, type ActionIcon } from '../actionButtonProps';
import { useCopyFeedback } from '../useCopyFeedback';
import styles from '../CopyFeedback.module.css';

export function CopyAction({
  label,
  text,
  Icon,
}: {
  label: string;
  text: string;
  Icon: ActionIcon;
}) {
  const { copied, animationKey, copy } = useCopyFeedback();

  return (
    <Button
      {...actionButtonProps}
      before={
        <span key={animationKey} className={classNames(styles.icon, copied && styles.copied)}>
          <Icon className={styles.copyIcon} />
          <Icon20ChecksOutline className={styles.doneIcon} />
        </span>
      }
      onClick={() => void copy(text)}
    >
      {label}
    </Button>
  );
}
