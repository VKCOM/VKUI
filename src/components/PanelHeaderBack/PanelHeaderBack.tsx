import React, { FunctionComponent } from 'react';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import HeaderButton, { HeaderButtonProps } from '../HeaderButton/HeaderButton';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

export interface PanelHeaderBackProps extends HeaderButtonProps {}

const PanelHeaderBack: FunctionComponent<PanelHeaderBackProps> = React.memo((props: PanelHeaderBackProps) => {
  const platform = usePlatform();

  return (
    <HeaderButton {...props}>
      {platform === ANDROID ? <Icon24Back/> : <Icon28ChevronBack/>}
    </HeaderButton>
  );
});

export default PanelHeaderBack;
