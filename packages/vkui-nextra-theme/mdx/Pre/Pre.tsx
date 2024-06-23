import * as React from 'react';
import { Icon24CopyOutline, Icon24DoneOutline, Icon24ErrorCircleOutline } from '@vkontakte/icons';
import { classNames, copyTextToClipboard } from '@vkontakte/vkjs';
import { IconButton } from '@vkontakte/vkui';
import styles from './Pre.module.css';

export const Pre = ({ children, className, ...props }: React.ComponentProps<'pre'>) => {
  const preRef = React.useRef<HTMLPreElement | null>(null);

  const [state, setState] = React.useState<'done' | 'error' | 'normal'>('normal');

  const Icon = {
    done: Icon24DoneOutline,
    error: Icon24ErrorCircleOutline,
    normal: Icon24CopyOutline,
  }[state];

  const copyCode = () => {
    const data = preRef.current?.querySelector('code')?.textContent || '';

    copyTextToClipboard(data)
      .then(() => setState('done'))
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
        setState('error');
      })
      .finally(() => {
        setTimeout(() => setState('normal'), 1000);
      });
  };

  return (
    <div className={styles.host}>
      <pre ref={preRef} className={classNames(className, styles.pre)} {...props}>
        {children}
      </pre>
      <div className={styles.buttons}>
        <IconButton label="Копировать код" onClick={copyCode}>
          <Icon />
        </IconButton>
      </div>
    </div>
  );
};
