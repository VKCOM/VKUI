import React, { FunctionComponent } from 'react';
import Icon28CancelOutline from '@vkontakte/icons/dist/28/cancel_outline';
import PanelHeaderButton, { PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

const PanelHeaderClose: FunctionComponent<PanelHeaderButtonProps> = ({ children, ...restProps }: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  return (
    <PanelHeaderButton {...restProps}>
      {platform === ANDROID ? <Icon28CancelOutline /> : children}
    </PanelHeaderButton>
  );
};

PanelHeaderClose.defaultProps = {
  children: 'Отмена',
};

export default PanelHeaderClose;
