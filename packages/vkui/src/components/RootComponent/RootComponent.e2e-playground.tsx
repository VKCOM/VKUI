import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { RootComponent, type RootComponentProps } from './RootComponent';

export const RootComponentPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          // TODO: Добавить until-found и hidden
          // https://github.com/facebook/react/issues/24740
          hidden: [false, true],
          children: ['text'],
        },
      ]}
    >
      {(props: RootComponentProps<HTMLElement>) => <RootComponent {...props} />}
    </ComponentPlayground>
  );
};
