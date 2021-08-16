import React from 'react';
import { Text } from '@vkui';
import { HoverDropdown } from '@vkui/unstable';
import { Icon16ErrorCircleOutline } from '@vkontakte/icons';
import './ComplexType.css';

export const ComplexTypeRenderder = ({ name, raw }) => {
  return (
    <HoverDropdown placement="right" content={
      <div className="ComplexTypeDropdown">
        {raw}
      </div>
    }>
      <Text className="ComplexType" weight="regular">
        <span className="ComplexType__name">{name}</span>
        <Icon16ErrorCircleOutline className="ComplexType__icon" />
      </Text>
    </HoverDropdown>
  );
};

export default ComplexTypeRenderder;
