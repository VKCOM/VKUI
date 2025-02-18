import { type ReactNode } from 'react';
import { type Direction } from '../../../src/hooks/useDirection';
import { COMPONENTS_DATA } from '../config';
import { ComponentOverviewCard } from './ComponentOverviewCard';

const getComponentRenderedNode = (componentName: string) => {
  const componentData = COMPONENTS_DATA[componentName];
  const createComponentRender = () => {
    const Component = componentData.component;
    return <Component {...(componentData.args || {})} />;
  };

  const createWithDecorator = (component: ReactNode) => {
    if (!componentData.decorator) {
      return component;
    }
    const Decorator = componentData.decorator;
    return <Decorator>{component}</Decorator>;
  };

  const component =
    (componentData.playgroundRender && componentData.playgroundRender(componentData.args || {})) ||
    (componentData.component && createComponentRender()) ||
    null;

  return component && createWithDecorator(component);
};

export const ComponentOverviewCardWrapper: React.FC<{
  componentName: string;
  groupTitle: string;
  direction: Direction;
}> = ({ componentName, groupTitle, direction }) => {
  const componentData = COMPONENTS_DATA[componentName];
  const component = getComponentRenderedNode(componentName);
  return (
    <ComponentOverviewCard
      name={componentName}
      group={groupTitle}
      component={component}
      direction={direction}
      minWidth={componentData.minWidth}
      maxWidth={componentData.maxWidth}
    />
  );
};
