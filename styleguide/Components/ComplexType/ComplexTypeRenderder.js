import React from 'react';
import { Text, ViewWidth, useAdaptivity } from '@vkui';
import { TextTooltip } from '@vkui/unstable';
import { Icon16ErrorCircleOutline } from '@vkontakte/icons';
import TypeRenderer from '../Type/TypeRenderer';
import './ComplexType.css';

export const ComplexTypeRenderder = ({ name, raw }) => {
  const { viewWidth } = useAdaptivity();

  if (viewWidth <= ViewWidth.MOBILE) {
    return <TypeRenderer>{raw}</TypeRenderer>;
  }

  return (
    <TextTooltip className="ComplexTypeDropdown" placement="right" text={raw}>
      <Text className="ComplexType" weight="regular">
        <span className="ComplexType__name">{name}</span>
        <Icon16ErrorCircleOutline className="ComplexType__icon" />
      </Text>
    </TextTooltip>
  );
};

export default ComplexTypeRenderder;
