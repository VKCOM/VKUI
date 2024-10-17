import * as React from 'react';
import { Icon16ErrorCircleOutline } from '@vkontakte/icons';
import { classNames, Text, Tooltip, useAdaptivityConditionalRender } from '@vkui';
import TypeRenderer from '../Type/TypeRenderer';
import './ComplexType.css';

export const ComplexTypeRenderer = ({ name, raw }) => {
  const { sizeX } = useAdaptivityConditionalRender();

  return (
    <React.Fragment>
      {sizeX.compact && <TypeRenderer className={sizeX.compact.className}>{raw}</TypeRenderer>}
      {sizeX.regular && (
        <Tooltip
          className={classNames('ComplexTypeDropdown', sizeX.regular.className)}
          placement="right"
          description={raw}
        >
          <Text className="ComplexType">
            <span className="ComplexType__name">{name}</span>
            <Icon16ErrorCircleOutline className="ComplexType__icon" />
          </Text>
        </Tooltip>
      )}
    </React.Fragment>
  );
};

export default ComplexTypeRenderer;
