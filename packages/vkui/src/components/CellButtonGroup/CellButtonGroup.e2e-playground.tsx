import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { CellButton } from '../CellButton/CellButton';
import { CellButtonGroup, type CellButtonGroupProps } from './CellButtonGroup';

export const CellButtonGroupPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground {...props}>
      {(props: CellButtonGroupProps) => (
        <CellButtonGroup {...props}>
          <CellButton appearance="negative" centered>
            Пожаловаться
          </CellButton>
          <CellButtonGroup.Separator />
          <CellButton centered>Отмена</CellButton>
        </CellButtonGroup>
      )}
    </ComponentPlayground>
  );
};
