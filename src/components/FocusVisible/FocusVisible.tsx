import { FC } from 'react';
import { classNames } from '../../lib/classNames';
import './FocusVisible.css';

export type FocusVisibleOutline = 'inside' | 'outside';

interface FocusVisibleProps {
  outline: FocusVisibleOutline;
}

export const FocusVisible: FC<FocusVisibleProps> = ({ outline }: FocusVisibleProps) => (
  <span aria-hidden="true" vkuiClass={classNames('FocusVisible', `FocusVisible--${outline}`)} />
);
