import React, { FunctionComponent } from 'react';
import { Icon28ChevronBack, Icon28ChevronLeftOutline, Icon28ArrowLeftOutline } from '@vkontakte/icons';
import PanelHeaderButton, { PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import { ANDROID, VKCOM, IOS } from '../../lib/platform';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity, SizeType } from '../../hoc/withAdaptivity';
import { AdaptivityProps } from '../..';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';

const PanelHeaderBack: FunctionComponent<PanelHeaderButtonProps & AdaptivityProps> = ({ label, sizeX, ...props }: PanelHeaderButtonProps & AdaptivityProps) => {
  const platform = usePlatform();
  const showLabel = platform === VKCOM || platform === IOS && sizeX === SizeType.REGULAR;
  const className = classNames(getClassName('PanelHeaderBack', platform), {
    'PanelHeaderBack--has-label': showLabel && !!label,
  });

  return (
    <PanelHeaderButton {...props} vkuiClass={className} label={showLabel && label}>
      {platform === ANDROID ? <Icon28ArrowLeftOutline /> : platform === VKCOM ? <Icon28ChevronLeftOutline /> : <Icon28ChevronBack />}
    </PanelHeaderButton>
  );
};

export default React.memo(withAdaptivity(PanelHeaderBack, {
  sizeX: true,
}));
