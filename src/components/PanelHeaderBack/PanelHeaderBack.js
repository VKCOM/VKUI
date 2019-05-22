import React from 'react';
import PropTypes from 'prop-types';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import HeaderButton from '../HeaderButton/HeaderButton';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';

const PanelHeaderBack = React.memo(({ ...restProps }) => (
  <HeaderButton {...restProps}>
    {IS_PLATFORM_ANDROID ? <Icon24Back /> : <Icon28ChevronBack />}
  </HeaderButton>
));

PanelHeaderBack.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default PanelHeaderBack;
