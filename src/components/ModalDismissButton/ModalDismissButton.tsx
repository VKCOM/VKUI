import * as React from 'react';
import { Icon20Cancel } from '@vkontakte/icons';
import Tappable from '../Tappable/Tappable';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import './ModalDismissButton.css';

export type ModalDismissButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const ModalDismissButton: React.FC<ModalDismissButtonProps> = (props: ModalDismissButtonProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      vkuiClass={getClassName('ModalDismissButton', platform)}
      {...props}
      activeMode="ModalDismissButton--active"
      hoverMode="ModalDismissButton--hover"
    >
      <Icon20Cancel />
    </Tappable>
  );
};

ModalDismissButton.defaultProps = {
  'aria-label': 'Закрыть',
};

export default ModalDismissButton;
