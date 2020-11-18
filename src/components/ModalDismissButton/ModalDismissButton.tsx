import React, { HTMLAttributes, FC } from 'react';
import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import { Icon28CancelOutline } from '@vkontakte/icons';
import withAdaptivity, { AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import classNames from '../../lib/classNames';

export interface ModalDismissButtonProps extends HTMLAttributes<HTMLButtonElement>, AdaptivityProps {}

const ModalDismissButton: FC<ModalDismissButtonProps> = (props) => {
  const { viewWidth } = props;
  const sideButton = viewWidth >= ViewWidth.SMALL_TABLET;

  return (
    <PanelHeaderButton className={classNames('ModalDismissButton', {
      'ModalDismissButton--side': sideButton,
    })} {...props}>
      {sideButton ? <Icon28CancelOutline width={20} height={20} /> : <Icon24Dismiss />}
    </PanelHeaderButton>
  );
};

export default withAdaptivity(ModalDismissButton, {
  viewWidth: true,
});
