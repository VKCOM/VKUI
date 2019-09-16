import React, { FunctionComponent } from 'react';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import HeaderButton, { HeaderButtonProps } from '../HeaderButton/HeaderButton';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

export interface PanelHeaderCloseProps extends HeaderButtonProps {}

const PanelHeaderClose: FunctionComponent<PanelHeaderCloseProps> = ({ children, ...restProps }: PanelHeaderCloseProps) => {
  const platform = usePlatform();
  return (
    <HeaderButton {...restProps}>
      {platform === ANDROID ? <Icon24Cancel /> : children}
    </HeaderButton>
  );
};

PanelHeaderClose.defaultProps = {
  children: 'Отмена'
};

export default PanelHeaderClose;
