import { FC } from 'react';
import { classNames } from '../../lib/classNames';
import './FocusVisible.css';

export type FocusVisibleOutline = 'inside' | 'outside';

interface FocusVisibleProps {
  mode: FocusVisibleOutline;
}

export const FocusVisible: FC<FocusVisibleProps> = ({ mode }: FocusVisibleProps) => (
  <span aria-hidden="true" vkuiClass={classNames('FocusVisible', `FocusVisible--${mode}`)} />
);
