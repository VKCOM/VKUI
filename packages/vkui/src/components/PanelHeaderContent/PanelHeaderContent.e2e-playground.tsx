import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Avatar } from '../Avatar/Avatar';
import { PanelHeaderContent, type PanelHeaderContentProps } from './PanelHeaderContent';

export const PanelHeaderContentPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          before: [<Avatar size={36} key="icon" />, undefined],
          subtitle: ['Был в сети вчера', undefined],
          children: ['Влад Анесов'],
          aside: ['Подробнее', undefined],
        },
      ]}
    >
      {(props: PanelHeaderContentProps) => <PanelHeaderContent {...props} />}
    </ComponentPlayground>
  );
};
