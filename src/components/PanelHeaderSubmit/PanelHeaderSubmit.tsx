import * as React from 'react';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import { Icon28DoneOutline } from '@vkontakte/icons';
import { ANDROID, VKCOM } from '../../lib/platform';
import { usePlatform } from '../../hooks/usePlatform';
import { getTitleFromChildren } from '../../lib/utils';

const PanelHeaderSubmit: React.FunctionComponent<PanelHeaderButtonProps> = ({
  children,
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton aria-label={getTitleFromChildren(children)} primary {...restProps}>
      {platform === ANDROID || platform === VKCOM
        ? <Icon28DoneOutline />
        : children
      }
    </PanelHeaderButton>
  );
};

PanelHeaderSubmit.defaultProps = {
  children: 'Готово',
};

export default PanelHeaderSubmit;
