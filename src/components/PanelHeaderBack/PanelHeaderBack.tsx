import React, { FunctionComponent } from 'react';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28ChevronLeftOutline from '@vkontakte/icons/dist/28/chevron_left_outline';
import Icon28ArrowLeftOutline from '@vkontakte/icons/dist/28/arrow_left_outline';
import PanelHeaderButton, { PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import { ANDROID, VKCOM, IOS } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { SizeType } from '../../hoc/withAdaptivity';
import { AdaptivityProps } from '../..';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const PanelHeaderBack: FunctionComponent<PanelHeaderButtonProps & AdaptivityProps> = ({ label, sizeX, ...props }: PanelHeaderButtonProps & AdaptivityProps) => {
  const platform = usePlatform();
  const showLabel = platform === VKCOM || platform === IOS && sizeX === SizeType.REGULAR;

  return (
    <PanelHeaderButton className={classNames(getClassName('PanelHeaderBack', platform), {
      'PanelHeaderBack--has-label': showLabel && !!label,
    })} label={showLabel && label} {...props}>
      {platform === ANDROID ? <Icon28ArrowLeftOutline /> : platform === VKCOM ? <Icon28ChevronLeftOutline /> : <Icon28ChevronBack />}
    </PanelHeaderButton>
  );
};

export default React.memo(withAdaptivity(PanelHeaderBack, {
  sizeX: true,
}));
