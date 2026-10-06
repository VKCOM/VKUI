import { useEffect, useRef, useState } from 'react';
import { copyTextToClipboard } from '@vkontakte/vkjs';

export const useCopyFeedback = () => {
  const [copied, setCopied] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const copy = async (text: string) => {
    if (await copyTextToClipboard(text).catch(() => false)) {
      setCopied(true);
      setAnimationKey((key) => key + 1);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  return { copied, animationKey, copy };
};
