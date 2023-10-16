import * as React from 'react';
import { Icon28SettingsOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import {
  AppDefaultWrapper,
  type AppWrapperProps,
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { ActionSheet, type ActionSheetProps } from './ActionSheet';

const AppWrapper = ({ children, ...restProps }: AppWrapperProps) => (
  <AppDefaultWrapper scroll="contain" {...restProps}>
    {children}
  </AppDefaultWrapper>
);

const ActionSheetWrapper = (props: ActionSheetProps) => {
  const platform = usePlatform();
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div style={platform === Platform.VKCOM ? { height: 900 } : {}}>
      <button ref={toggleRef} className={TEST_CLASS_NAMES.CONTENT}>
        target
      </button>
      <ActionSheet
        {...props}
        style={{
          // Перебиваем "absolute", чтобы не задавать фиксированную высоту для тестов под iOS и Android
          position: 'relative',
        }}
        toggleRef={toggleRef}
        onClose={noop}
      />
    </div>
  );
};

const propSets = [
  {
    children: [
      [
        <ActionSheetItem key="1">Элемент</ActionSheetItem>,
        <ActionSheetItem key="2">Второй элемент</ActionSheetItem>,
        <ActionSheetItem key="3" before={<Icon28SettingsOutline />}>
          Третий элемент
        </ActionSheetItem>,
        <ActionSheetItem key="4" before={<Icon28SettingsOutline />} subtitle="Есть подзаголовок">
          Четвертый элемент
        </ActionSheetItem>,
        <ActionSheetItem key="5" selectable checked>
          Пятый элемент
        </ActionSheetItem>,
        <ActionSheetItem
          key="6"
          before={<Icon28SettingsOutline />}
          subtitle="Есть подзаголовок, который тоже не заканчивается"
        >
          Шестой элемент с длинным заголовком
        </ActionSheetItem>,
        <ActionSheetItem
          key="7"
          before={<Icon28SettingsOutline />}
          subtitle="Есть подзаголовок, который не обрезается (multiline)"
          multiline
        >
          Седьмой элемент с очень длинным заголовком, который не должен обрезаться (multiline)
        </ActionSheetItem>,
        <ActionSheetItem key="8" subtitle="Есть подзаголовок" meta="Meta">
          Восьмой элемент
        </ActionSheetItem>,
        <ActionSheetItem key="9" subtitle="Meta прижата справа" meta="Meta" multiline>
          Девятый элемент
        </ActionSheetItem>,
      ],
    ],
    header: ['Заголовок'],
  },
];

export const ActionSheetPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground {...props} propSets={propSets} AppWrapper={AppWrapper}>
      {(props: ActionSheetProps) => <ActionSheetWrapper {...props} />}
    </ComponentPlayground>
  );
};
