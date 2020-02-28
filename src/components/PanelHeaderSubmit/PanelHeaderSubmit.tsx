import React, { FunctionComponent } from 'react';
import PanelHeaderButton, { PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import Icon28DoneOutline from '@vkontakte/icons/dist/28/done_outline';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

const PanelHeaderSubmit: FunctionComponent<PanelHeaderButtonProps> = ({
  children,
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton primary {...restProps}>
      {platform === ANDROID ? <Icon28DoneOutline /> : children}
    </PanelHeaderButton>
  );
};

PanelHeaderSubmit.defaultProps = {
  children: 'Готово',
};

export default PanelHeaderSubmit;
