import React, { FunctionComponent } from 'react';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PanelHeaderButton, { PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

const PanelHeaderBack: FunctionComponent<PanelHeaderButtonProps> = (props: PanelHeaderButtonProps) => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton {...props}>
      {platform === ANDROID ? <Icon24Back/> : <Icon28ChevronBack/>}
    </PanelHeaderButton>
  );
};

export default React.memo(PanelHeaderBack);
