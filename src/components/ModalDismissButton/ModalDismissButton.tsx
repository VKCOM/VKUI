import React, { HTMLAttributes, FC } from 'react';
import { Icon28CancelOutline } from '@vkontakte/icons';
import Tappable from '../Tappable/Tappable';

export type ModalDismissButtonProps = HTMLAttributes<HTMLButtonElement>;

const ModalDismissButton: FC<ModalDismissButtonProps> = (props) => {
  return (
    <Tappable className="ModalDismissButton" {...props}>
      <Icon28CancelOutline width={20} height={20} />
    </Tappable>
  );
};

export default ModalDismissButton;
