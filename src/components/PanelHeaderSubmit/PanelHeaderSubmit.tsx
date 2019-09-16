import React, { FunctionComponent } from 'react';
import HeaderButton, { HeaderButtonProps } from '../HeaderButton/HeaderButton';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

export interface PanelHeaderSubmitProps extends HeaderButtonProps {}

const PanelHeaderSubmit: FunctionComponent<PanelHeaderSubmitProps> = ({
  children,
  ...restProps
}: PanelHeaderSubmitProps) => {
  const platform = usePlatform();

  return (
    <HeaderButton primary {...restProps}>
      {platform === ANDROID ? <Icon24Done/> : children}
    </HeaderButton>
  );
};

PanelHeaderSubmit.defaultProps = {
  children: 'Готово'
};

export default PanelHeaderSubmit;
