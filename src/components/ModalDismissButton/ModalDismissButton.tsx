import { HTMLAttributes, FC } from 'react';
import { Icon20Cancel } from '@vkontakte/icons';
import Tappable from '../Tappable/Tappable';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';

export type ModalDismissButtonProps = HTMLAttributes<HTMLButtonElement>;

const ModalDismissButton: FC<ModalDismissButtonProps> = ({ className, ...props }) => {
  const platform = usePlatform();
  return (
    <Tappable className={classNames(getClassName('ModalDismissButton', platform), className)} {...props}>
      <Icon20Cancel />
    </Tappable>
  );
};

export default ModalDismissButton;
