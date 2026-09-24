import * as React from 'react';
import { copyTextToClipboard } from '@vkontakte/vkjs';

export function useCopyFeedback() {
  const [copied, setCopied] = React.useState(false);
  const [animationKey, setAnimationKey] = React.useState(0);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const copy = async (text: string) => {
    if (await copyTextToClipboard(text).catch(() => false)) {
      setCopied(true);
      setAnimationKey((key) => key + 1);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  return { copied, animationKey, copy };
}
