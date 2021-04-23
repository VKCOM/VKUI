import React, { FC } from 'react';
import { Text } from '@vkui';
import Tooltip from '@rsg-components/Tooltip';
import { Icon16ErrorCircleOutline } from '@vkontakte/icons';
import './ComplexType.css';

export const ComplexTypeRenderder: FC = ({ name, raw }) => {
  return (
    <Tooltip placement="right" content={raw}>
      <Text className="ComplexType" weight="regular">
        <span className="ComplexType__name">{name}</span>
        <Icon16ErrorCircleOutline className="ComplexType__icon" />
      </Text>
    </Tooltip>
  )
}

export default ComplexTypeRenderder;
