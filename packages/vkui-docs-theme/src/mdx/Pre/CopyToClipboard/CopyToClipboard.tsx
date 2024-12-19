import * as React from 'react';
import { Icon24ChecksOutline, Icon24CopyOutline } from '@vkontakte/icons';
import { classNames, copyTextToClipboard } from '@vkontakte/vkjs';
import { IconButton } from '@vkontakte/vkui';
import styles from './CopyToClipboard.module.css';

interface CopyToClipboardProps extends React.ComponentProps<'button'> {
  getValue: () => string;
}

export const CopyToClipboard = ({ getValue, className, ...props }: CopyToClipboardProps) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) {
      return;
    }
    const timerId = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [copied]);

  const handleClick = React.useCallback<
    NonNullable<React.ComponentProps<'button'>['onClick']>
  >(async () => {
    setCopied(true);
    await copyTextToClipboard(getValue());
  }, [getValue]);

  return (
    <IconButton
      onClick={handleClick}
      label="Скопировать код"
      className={classNames(className, copied && styles.copied)}
      {...props}
    >
      <Icon24CopyOutline className={classNames(styles.icon, styles.copyIcon)} />
      <Icon24ChecksOutline className={classNames(styles.icon, styles.doneIcon)} />
    </IconButton>
  );
};
