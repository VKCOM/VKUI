'use client';

import * as React from 'react';
import { ArgTypes, Description } from '@storybook/blocks';
import { DisplayTitle, Flex, SegmentedControl } from '../../src';
import { SectionGroup } from './SectionGroup';

type SubComponent = {
  name: string;
  fullName: string;
  component: React.ComponentType<any>;
};

export function getSubComponents(parentComponent: React.ComponentType<any>): SubComponent[] {
  // Получаем displayName родительского компонента
  const parentDisplayName = parentComponent.displayName || parentComponent.name;

  // Если нет displayName - возвращаем пустой массив
  if (!parentDisplayName) {
    return [];
  }

  // Итерируем по статическим свойствам компонента
  return Object.entries(parentComponent)
    .filter(([_, value]) => {
      // Проверяем что значение - React компонент
      if (typeof value !== 'function' && typeof value?.render !== 'function') {
        return false;
      }
      // Проверяем displayName дочернего компонента
      const childDisplayName = value.displayName || value.name;
      return childDisplayName?.startsWith(`${parentDisplayName}.`);
    })
    .map(([key, value]) => {
      // Извлекаем название сабкомпонента из displayName
      const childDisplayName = value.displayName || value.name;
      const name = childDisplayName?.replace(`${parentDisplayName}.`, '') || key;

      return {
        name,
        fullName: childDisplayName,
        component: value as React.ComponentType<any>,
      };
    });
}

export const SubcomponentsBlocks: React.FC<{ component: React.ComponentType<any> }> = ({
  component: parentComponent,
}) => {
  const [selectedSubcomponent, setSelectedSubcomponent] = React.useState('');
  const subcomponents = getSubComponents(parentComponent);
  if (!subcomponents.length) {
    return null;
  }

  return (
    <SectionGroup header="Подкомпоненты">
      <Flex direction="column">
        {subcomponents.length === 1 && (
          <DisplayTitle level="4">{subcomponents[0].name}</DisplayTitle>
        )}
        {subcomponents.length > 1 && (
          <SegmentedControl
            role="tablist"
            onChange={(newComponent) => setSelectedSubcomponent(newComponent as string)}
            options={subcomponents.map(({ name }) => ({
              'label': name,
              'value': name,
              'aria-controls': `tab-content-${name}`,
              'id': `tab-${name}`,
            }))}
          />
        )}
        {subcomponents.map(
          ({ name, component }, index) =>
            (name === selectedSubcomponent || (!selectedSubcomponent && index === 0)) && (
              <Flex
                direction="column"
                gap="m"
                id={`tab-content-${name}`}
                aria-labelledby={`tab-${name}`}
                role="tabpanel"
                tabIndex={0}
                key={name}
              >
                <Description of={component} />
                <ArgTypes of={component} />
              </Flex>
            ),
        )}
      </Flex>
    </SectionGroup>
  );
};
