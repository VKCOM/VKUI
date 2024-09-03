import type { SpinnerProps } from '../Spinner/Spinner';

export type ScreenSpinnerProps = Omit<SpinnerProps, 'size'> & {
  state?: 'loading' | 'cancelable' | 'done' | 'error';
  mode?: 'shadow' | 'overlay';
  cancelLabel?: string;
};
