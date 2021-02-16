import { FunctionComponent } from 'react';
import { Icon28CancelOutline } from '@vkontakte/icons';
import PanelHeaderButton, { PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import { ANDROID, VKCOM } from '../../lib/platform';
import { usePlatform } from '../../hooks/usePlatform';

const PanelHeaderClose: FunctionComponent<PanelHeaderButtonProps> = ({ children, ...restProps }: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  return (
    <PanelHeaderButton {...restProps}>
      {platform === ANDROID || platform === VKCOM ? <Icon28CancelOutline /> : children}
    </PanelHeaderButton>
  );
};

PanelHeaderClose.defaultProps = {
  children: 'Отмена',
};

export default PanelHeaderClose;
