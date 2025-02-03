import { Icon24Add, Icon24Attach } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { Button } from '../Button/Button';
import { ButtonGroup, type ButtonGroupProps } from './ButtonGroup';

export const ButtonGroupPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          gap: ['none', 'space', 's', 'm'],
          style: [withLabel({ minWidth: 300 }, 'With min-width=300px')],
        },
        {
          stretched: [undefined, true],
          children: [
            undefined,
            withLabel('Этот оооооочень длинный-длинный текст', 'Long children'),
          ],
        },
      ]}
    >
      {({ mode, gap, stretched, style, children }: ButtonGroupProps) => (
        <ButtonGroup mode="vertical" gap={gap} stretched={stretched} style={style}>
          <Button size="l" appearance="accent" stretched>
            {children || 'Разрешить'}
          </Button>
          <Button size="l" appearance="accent" stretched>
            Завершить
          </Button>
          <ButtonGroup mode="vertical" gap={gap} stretched>
            <ButtonGroup mode={mode} gap={gap} stretched>
              <Button size="l" appearance="negative" stretched>
                {children || 'Не сейчас'}
              </Button>
              <Button size="l" appearance="positive" stretched>
                Продолжить
              </Button>
            </ButtonGroup>
            <ButtonGroup mode="horizontal" gap="space" stretched={stretched}>
              <Button
                size="l"
                appearance="accent"
                mode="tertiary"
                before={<Icon24Attach />}
                stretched
              >
                Прикрепить файл
              </Button>
              <Button size="l" appearance="accent" before={<Icon24Add />} />
            </ButtonGroup>
          </ButtonGroup>
        </ButtonGroup>
      )}
    </ComponentPlayground>
  );
};

export const ButtonGroupWithAlignPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['vertical', 'horizontal'],
          align: ['left', 'center', 'right'],
        },
      ]}
    >
      {({ mode, align }: ButtonGroupProps) => (
        <ButtonGroup mode={mode} align={align} style={{ width: '100%' }}>
          <Button size="l" appearance="accent">
            Разрешить
          </Button>
          <Button size="l" appearance="accent">
            Завершить
          </Button>
          <ButtonGroup>
            <Button size="l" appearance="negative">
              Не сейчас
            </Button>
            <Button size="l" appearance="positive">
              Продолжить
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      )}
    </ComponentPlayground>
  );
};
