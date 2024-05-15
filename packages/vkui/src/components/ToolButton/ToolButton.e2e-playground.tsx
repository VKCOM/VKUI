import { Icon20Add, Icon24Add } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { ToolButton, type ToolButtonProps } from './ToolButton';

export const ToolButtonPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          $adaptivity: 'y',
          direction: ['column', 'row'],
          children: ['Кнопка'],
        },
        {
          $adaptivity: 'y',
          rounded: [true],
        },
        {
          appearance: ['accent', 'neutral'],
          mode: ['primary', 'secondary', 'tertiary', 'outline'],
          children: ['Кнопка'],
        },
      ]}
    >
      {(props: ToolButtonProps) => {
        const icons = {
          IconCompact: Icon20Add,
          IconRegular: Icon24Add,
        };

        return (
          <ButtonGroup mode={props.direction === 'row' ? 'vertical' : 'horizontal'}>
            <ToolButton {...icons} {...props} />
            <ToolButton {...icons} {...props} hovered />
            <ToolButton {...icons} {...props} activated />
            <ToolButton {...icons} {...props} disabled />
          </ButtonGroup>
        );
      }}
    </ComponentPlayground>
  );
};
