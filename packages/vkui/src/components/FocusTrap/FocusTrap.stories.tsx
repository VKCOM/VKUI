import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useGlobalEscKeyDown } from '../../hooks/useGlobalEscKeyDown';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Checkbox } from '../Checkbox/Checkbox';
import { Flex } from '../Flex/Flex';
import { FormItem } from '../FormItem/FormItem';
import { Input } from '../Input/Input';
import { Spacing } from '../Spacing/Spacing';
import { Text } from '../Typography/Text/Text';
import { FocusTrap, type FocusTrapProps } from './FocusTrap';

const story: Meta<FocusTrapProps> = {
  title: 'Utils/FocusTrap',
  component: FocusTrap,
  parameters: createStoryParameters('FocusTrap', CanvasFullLayout, DisableCartesianParam),
  tags: ['Утилиты'],
};

export default story;

type Story = StoryObj<FocusTrapProps>;

const containerStyle: React.CSSProperties = {
  padding: 16,
  border: '2px solid var(--vkui--color_accent_blue)',
  borderRadius: 8,
};

export const Playground: Story = {
  render: function Render(args) {
    const focusTrapRef = React.useRef<HTMLDivElement>(null);

    return (
      <FocusTrap {...args} rootRef={focusTrapRef}>
        <div ref={focusTrapRef} tabIndex={-1} style={containerStyle}>
          <Flex direction="column" gap="m">
            <FormItem top="Имя">
              <Input placeholder="Введите имя" />
            </FormItem>
            <FormItem top="Email">
              <Input placeholder="Введите email" type="email" />
            </FormItem>
            <ButtonGroup>
              <Button>Отправить</Button>
              <Button mode="secondary">Отмена</Button>
            </ButtonGroup>
          </Flex>
        </div>
      </FocusTrap>
    );
  },
  args: {
    autoFocus: true,
    restoreFocus: true,
    disabled: false,
  },
};

export const WithToggle: Story = {
  render: function Render() {
    const [open, setOpen] = React.useState(false);
    const focusTrapRef = React.useRef<HTMLDivElement>(null);

    return (
      <Flex direction="column" gap="l">
        <Button onClick={() => setOpen((prev) => !prev)}>
          {open ? 'Закрыть область' : 'Открыть область с захватом фокуса'}
        </Button>
        {open && (
          <FocusTrap rootRef={focusTrapRef} autoFocus restoreFocus>
            <div ref={focusTrapRef} tabIndex={-1} style={containerStyle}>
              <Flex direction="column" gap="m">
                <Text>
                  Фокус зациклен внутри этой области. Попробуйте нажать Tab для навигации.
                </Text>
                <Spacing />
                <Input placeholder="Первое поле ввода" />
                <Input placeholder="Второе поле ввода" />
                <ButtonGroup>
                  <Button>Действие</Button>
                  <Button mode="secondary" onClick={() => setOpen(false)}>
                    Закрыть
                  </Button>
                </ButtonGroup>
              </Flex>
            </div>
          </FocusTrap>
        )}
      </Flex>
    );
  },
};

export const AutoFocusModes: Story = {
  render: function Render() {
    const [mode, setMode] = React.useState<'true' | 'root' | 'false'>('true');
    const [show, setShow] = React.useState(true);
    const focusTrapRef = React.useRef<HTMLDivElement>(null);

    const autoFocusValue = mode === 'true' ? true : mode === 'root' ? 'root' : false;

    return (
      <Flex direction="column" gap="l">
        <Flex gap="m" align="center">
          <Box>
            <Text weight="2">Режим autoFocus:</Text>
            <Spacing size={8} />
            <ButtonGroup>
              <Button
                mode={mode === 'true' ? 'primary' : 'secondary'}
                onClick={() => setMode('true')}
              >
                true
              </Button>
              <Button
                mode={mode === 'root' ? 'primary' : 'secondary'}
                onClick={() => setMode('root')}
              >
                root
              </Button>
              <Button
                mode={mode === 'false' ? 'primary' : 'secondary'}
                onClick={() => setMode('false')}
              >
                false
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
        <Button mode="secondary" onClick={() => setShow((prev) => !prev)}>
          {show ? 'Скрыть' : 'Показать'}
        </Button>
        {show && (
          <FocusTrap key={mode} rootRef={focusTrapRef} autoFocus={autoFocusValue}>
            <div ref={focusTrapRef} tabIndex={-1} style={containerStyle}>
              <Flex direction="column" gap="m">
                <Text>
                  {mode === 'true' &&
                    'Фокус автоматически установлен на первый интерактивный элемент'}
                  {mode === 'root' && 'Фокус установлен на корневой элемент контейнера'}
                  {mode === 'false' && 'Автофокус отключён'}
                </Text>
                <Input placeholder="Первое поле ввода" />
                <Input placeholder="Второе поле ввода" />
                <Button>Кнопка</Button>
              </Flex>
            </div>
          </FocusTrap>
        )}
      </Flex>
    );
  },
};

export const RestoreFocusExample: Story = {
  render: function Render() {
    const [open, setOpen] = React.useState(false);
    const focusTrapRef = React.useRef<HTMLDivElement>(null);
    const alternativeRef = React.useRef<HTMLButtonElement>(null);

    return (
      <Flex direction="column" gap="l">
        <Flex gap="m">
          <Button onClick={() => setOpen(true)}>Открыть</Button>
          <Button mode="secondary" getRootRef={alternativeRef}>
            Альтернативный фокус
          </Button>
        </Flex>
        {open && (
          <FocusTrap
            rootRef={focusTrapRef}
            autoFocus
            restoreFocus
            getRestoreFocusTarget={() => alternativeRef.current}
          >
            <div ref={focusTrapRef} tabIndex={-1} style={containerStyle}>
              <Flex direction="column" gap="m">
                <Text>
                  При закрытии фокус вернётся на кнопку «Альтернативный фокус», а не на «Открыть».
                </Text>
                <Button onClick={() => setOpen(false)}>Закрыть</Button>
              </Flex>
            </div>
          </FocusTrap>
        )}
      </Flex>
    );
  },
};

export const DisabledExample: Story = {
  render: function Render() {
    const [disabled, setDisabled] = React.useState(false);
    const focusTrapRef = React.useRef<HTMLDivElement>(null);

    return (
      <Flex direction="column" gap="l">
        <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
          Отключить захват фокуса
        </Checkbox>
        <FocusTrap rootRef={focusTrapRef} disabled={disabled}>
          <div
            ref={focusTrapRef}
            tabIndex={-1}
            style={{
              ...containerStyle,
              borderColor: disabled
                ? 'var(--vkui--color_icon_secondary)'
                : 'var(--vkui--color_accent_blue)',
            }}
          >
            <Flex direction="column" gap="m">
              <Text>
                {disabled
                  ? 'Захват фокуса отключён — можно выйти за пределы области через Tab'
                  : 'Захват фокуса включён — фокус зациклен внутри области'}
              </Text>
              <Input placeholder="Поле ввода" />
              <Button>Кнопка внутри FocusTrap</Button>
            </Flex>
          </div>
        </FocusTrap>
        <Button mode="outline">Кнопка вне FocusTrap</Button>
      </Flex>
    );
  },
};

export const NestedFocusTraps: Story = {
  render: function Render() {
    const [showSecond, setShowSecond] = React.useState(false);
    const firstRef = React.useRef<HTMLDivElement>(null);
    const secondRef = React.useRef<HTMLDivElement>(null);

    return (
      <Flex direction="column" gap="l">
        <Text>
          При открытии вложенного FocusTrap, первый должен быть отключён для избежания конфликтов.
        </Text>
        <FocusTrap rootRef={firstRef} disabled={showSecond}>
          <div
            ref={firstRef}
            tabIndex={-1}
            style={{
              ...containerStyle,
              borderColor: showSecond
                ? 'var(--vkui--color_icon_secondary)'
                : 'var(--vkui--color_accent_blue)',
            }}
          >
            <Flex direction="column" gap="m">
              <Text weight="2">Первый FocusTrap {showSecond ? '(отключён)' : '(активен)'}</Text>
              <Input placeholder="Поле в первом FocusTrap" />
              <Button onClick={() => setShowSecond(true)}>Открыть вложенный</Button>
            </Flex>
            {showSecond && (
              <Spacing size={16}>
                <FocusTrap rootRef={secondRef} autoFocus restoreFocus>
                  <div
                    ref={secondRef}
                    tabIndex={-1}
                    style={{
                      ...containerStyle,
                      borderColor: 'var(--vkui--color_accent_green)',
                      marginTop: 16,
                    }}
                  >
                    <Flex direction="column" gap="m">
                      <Text weight="2">Вложенный FocusTrap (активен)</Text>
                      <Input placeholder="Поле во вложенном FocusTrap" />
                      <Button onClick={() => setShowSecond(false)}>Закрыть</Button>
                    </Flex>
                  </div>
                </FocusTrap>
              </Spacing>
            )}
          </div>
        </FocusTrap>
      </Flex>
    );
  },
};

export const ModalLikeUsage: Story = {
  render: function Render() {
    const [open, setOpen] = React.useState(false);
    const focusTrapRef = React.useRef<HTMLDivElement>(null);

    useGlobalEscKeyDown(open, () => setOpen(false));

    return (
      <Flex direction="column" gap="l">
        <Button onClick={() => setOpen(true)}>Открыть модальное окно</Button>
        {open && (
          <>
            <div
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 100,
              }}
              onClick={() => setOpen(false)}
            />
            <FocusTrap rootRef={focusTrapRef} autoFocus restoreFocus>
              <div
                ref={focusTrapRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-label="Пример модального окна"
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'var(--vkui--color_background_content)',
                  padding: 24,
                  borderRadius: 12,
                  zIndex: 101,
                  minWidth: 300,
                }}
              >
                <Flex direction="column" gap="m">
                  <Text weight="2">Модальное окно</Text>
                  <Text>Нажмите Escape или кнопку для закрытия</Text>
                  <Spacing />
                  <FormItem top="Имя">
                    <Input placeholder="Введите имя" />
                  </FormItem>
                  <ButtonGroup stretched>
                    <Button onClick={() => setOpen(false)}>Сохранить</Button>
                    <Button mode="secondary" onClick={() => setOpen(false)}>
                      Отмена
                    </Button>
                  </ButtonGroup>
                </Flex>
              </div>
            </FocusTrap>
          </>
        )}
      </Flex>
    );
  },
};
