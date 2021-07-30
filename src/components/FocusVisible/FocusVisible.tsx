import { FC } from 'react';
import { classNames } from '../../lib/classNames';
import './FocusVisible.css';

export type FocusVisibleMode = 'inside' | 'outside';

interface FocusVisibleProps {
  mode: FocusVisibleMode;
}

export const FocusVisible: FC<FocusVisibleProps> = ({ mode }: FocusVisibleProps) => (
  <span aria-hidden="true" vkuiClass={classNames('FocusVisible', `FocusVisible--${mode}`)} />
);
