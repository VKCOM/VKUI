import * as React from 'react';
import { Icon24Add, Icon24Attach } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Button } from '../Button/Button';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

describe('ButtonGroup', () => {
  describeScreenshotFuzz(
    ({ mode, gap, stretched, style, children }: ButtonGroupProps) => (
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
    ),
    [
      {
        gap: ['none', 'space', 's', 'm'],
        style: [{ minWidth: 300 }],
      },
      {
        stretched: [undefined, true],
        children: [undefined, 'Этот оооооочень длинный-длинный текст'],
      },
    ],
  );
});

describe('ButtonGroup align', () => {
  describeScreenshotFuzz(
    ({ align }: ButtonGroupProps) => (
      <ButtonGroup mode="vertical" align={align} style={{ width: '100%' }}>
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
    ),
    [
      {
        align: ['left', 'center', 'right'],
      },
    ],
  );
});
