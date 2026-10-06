import { Icon16CopyOutline, Icon16Done, Icon24CopyOutline, Icon24Done } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import styles from './IconsOverview.module.css';

type CopyFeedbackIconProps = {
  size: 16 | 24;
  copied: boolean;
  animationKey: number;
};

export const CopyFeedbackIcon = ({ size, copied, animationKey }: CopyFeedbackIconProps) => {
  const CopyIcon = size === 16 ? Icon16CopyOutline : Icon24CopyOutline;
  const DoneIcon = size === 16 ? Icon16Done : Icon24Done;

  return (
    <span
      key={animationKey}
      className={classNames(
        styles.copyFeedbackIcon,
        size === 16 && styles.copyFeedbackIconSmall,
        copied && styles.copied,
      )}
    >
      <CopyIcon className={styles.copyIcon} />
      <DoneIcon className={styles.doneIcon} />
    </span>
  );
};
