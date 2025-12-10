import { type ReactNode } from 'react';
import { COMPONENTS_DATA } from '../config';
import { ComponentOverviewCard, type ComponentOverviewCardProps } from './ComponentOverviewCard';

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

export const ComponentOverviewCardWrapper: React.FC<
  Omit<ComponentOverviewCardProps, 'customPath' | 'minWidth' | 'maxWidth' | 'component'>
> = (props) => {
  const componentData = COMPONENTS_DATA[props.componentName];
  const component = getComponentRenderedNode(props.componentName);
  return (
    <ComponentOverviewCard
      {...props}
      customPath={componentData.customPath}
      component={component}
      minWidth={componentData.minWidth}
      maxWidth={componentData.maxWidth}
    />
  );
};
