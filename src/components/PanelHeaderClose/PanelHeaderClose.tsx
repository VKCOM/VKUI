import React, { FunctionComponent } from 'react';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import PanelHeaderButton, { PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

const PanelHeaderClose: FunctionComponent<PanelHeaderButtonProps> = ({ children, ...restProps }: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  return (
    <PanelHeaderButton {...restProps}>
      {platform === ANDROID ? <Icon24Cancel /> : children}
    </PanelHeaderButton>
  );
};

PanelHeaderClose.defaultProps = {
  children: 'Отмена',
};

export default PanelHeaderClose;
