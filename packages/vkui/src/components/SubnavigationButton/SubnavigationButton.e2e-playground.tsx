import { Icon24Filter } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Counter } from '../Counter/Counter';
import { SubnavigationBar } from '../SubnavigationBar/SubnavigationBar';
import { SubnavigationButton, type SubnavigationButtonProps } from './SubnavigationButton';

export const SubnavigationButtonPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          chevron: [undefined, true],
          selected: [undefined, true],
          before: [undefined, <Icon24Filter key="icon" />],
          after: [
            undefined,
            <Counter key="counter" size="s">
              3
            </Counter>,
          ],
          children: ['Фильтры'],
        },
        {
          after: [
            <Counter key="counter" mode="primary" appearance="accent-red" size="s">
              3
            </Counter>,
          ],
          children: ['Новинки'],
        },
        {
          size: ['l'],
          textLevel: ['1', '2', '3'],
          children: ['Сканировать QR'],
        },
        {
          size: ['l', 'm', 's'],
          children: ['Сканировать QR'],
          $adaptivity: true,
        },
        {
          chevron: [true],
          selected: [undefined, true],
          before: [<Icon24Filter key="icon" />],
          mode: ['primary', 'outline', 'tertiary'],
          appearance: ['accent', 'neutral'],
          after: [
            <Counter key="counter" size="s">
              3
            </Counter>,
          ],
          children: ['Фильтры'],
          disabled: [undefined, true],
        },
      ]}
    >
      {(props: SubnavigationButtonProps) => (
        <SubnavigationBar>
          <SubnavigationButton {...props} />
        </SubnavigationBar>
      )}
    </ComponentPlayground>
  );
};
