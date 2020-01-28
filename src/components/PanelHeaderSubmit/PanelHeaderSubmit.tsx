import React, { FunctionComponent } from 'react';
import PanelHeaderButton, { PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

const PanelHeaderSubmit: FunctionComponent<PanelHeaderButtonProps> = ({
  children,
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton primary {...restProps}>
      {platform === ANDROID ? <Icon24Done/> : children}
    </PanelHeaderButton>
  );
};

PanelHeaderSubmit.defaultProps = {
  children: 'Готово',
};

export default PanelHeaderSubmit;
