import { noop } from '@vkontakte/vkjs';
import { useArgs } from 'storybook/preview-api';

// @ts-expect-error: TS2322 мокаем useArgs
export const useCustomArgs: typeof useArgs = () => {
  try {
    // eslint-disable-next-line react-compiler/react-compiler
    return useArgs();
  } catch {
    return [{}, noop, noop];
  }
};
