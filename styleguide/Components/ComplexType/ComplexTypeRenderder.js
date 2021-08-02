import React from 'react';
import { Text, withAdaptivity, ViewWidth } from '@vkui';
import Tooltip from '@rsg-components/Tooltip';
import { Icon16ErrorCircleOutline } from '@vkontakte/icons';
import TypeRenderer from '../Type/TypeRenderer';
import './ComplexType.css';

export const ComplexTypeRenderder = ({ name, raw, viewWidth }) => {
  if (viewWidth <= ViewWidth.MOBILE) {
    return <TypeRenderer>{raw}</TypeRenderer>;
  }

  return (
    <Tooltip placement="right" content={raw}>
      <Text className="ComplexType" weight="regular">
        <span className="ComplexType__name">{name}</span>
        <Icon16ErrorCircleOutline className="ComplexType__icon" />
      </Text>
    </Tooltip>
  );
};

export default withAdaptivity(ComplexTypeRenderder, { viewWidth: true });
