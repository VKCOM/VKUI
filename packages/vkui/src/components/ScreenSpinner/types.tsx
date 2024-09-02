import type { SpinnerProps } from '../Spinner/Spinner';

export interface ScreenSpinnerProps extends SpinnerProps {
  state?: 'loading' | 'cancelable' | 'done' | 'error';
  mode?: 'shadow' | 'overlay';
  cancelLabel?: string;
}
