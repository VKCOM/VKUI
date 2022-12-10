import React from 'react';
import {
  Text,
  useAdaptivityConditionalRender,
  classNames,
  unstable_TextTooltip as TextTooltip,
} from '@vkui';
import { Icon16ErrorCircleOutline } from '@vkontakte/icons';
import TypeRenderer from '../Type/TypeRenderer';
import './ComplexType.css';

export const ComplexTypeRenderer = ({ name, raw }) => {
  const { sizeX } = useAdaptivityConditionalRender();

  return (
    <React.Fragment>
      {sizeX.compact && <TypeRenderer className={sizeX.compact.className}>{raw}</TypeRenderer>}
      {sizeX.regular && (
        <TextTooltip
          className={classNames('ComplexTypeDropdown', sizeX.regular.className)}
          placement="right"
          text={raw}
        >
          <Text className="ComplexType">
            <span className="ComplexType__name">{name}</span>
            <Icon16ErrorCircleOutline className="ComplexType__icon" />
          </Text>
        </TextTooltip>
      )}
    </React.Fragment>
  );
};

export default ComplexTypeRenderer;
