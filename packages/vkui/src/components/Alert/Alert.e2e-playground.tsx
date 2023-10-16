import * as React from 'react';
import {
  AppDefaultWrapper,
  type AppWrapperProps,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { Alert, type AlertActionInterface, type AlertProps } from './Alert';

const AppWrapper = ({ children, ...restProps }: AppWrapperProps) => (
  <AppDefaultWrapper scroll="contain" {...restProps}>
    {children}
  </AppDefaultWrapper>
);

const cancel: AlertActionInterface = { mode: 'cancel', title: 'Cancel' };
const action: AlertActionInterface = { mode: 'default', title: 'Action' };
const destroy: AlertActionInterface = { mode: 'destructive', title: 'Destroy' };

const baseRender = (props: AlertProps) => (
  <Alert
    header="Подтвердите действие"
    text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
    style={{ position: 'relative' }}
    {...props}
  />
);

export const AlertMobilePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          actions: [
            [cancel, action],
            [cancel, destroy],
          ],
          actionsLayout: ['horizontal'],
        },
        {
          // Кнопку со стилем `cancel` нужно располагать либо слева, либо снизу, в зависимости от выбранного `actionsLayout`.
          actions: [
            [action, cancel],
            [destroy, cancel],
          ],
          actionsLayout: ['vertical'],
        },
      ]}
      AppWrapper={AppWrapper}
    >
      {baseRender}
    </ComponentPlayground>
  );
};

export const AlertDesktopPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          actions: [
            [cancel, action],
            [cancel, destroy],
          ],
          actionsLayout: ['horizontal'],
        },
      ]}
      AppWrapper={AppWrapper}
    >
      {baseRender}
    </ComponentPlayground>
  );
};

export const AlertLongWordPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          header: [
            'Оченьоченьоченьдлинноенеразрывноеслововзаголовкекотороедолжнопереноситьсянановуюстрочкуиневыходитьзаграницы',
          ],
          text: [
            'Оченьоченьоченьдлинноенеразрывноеслововописаниикотороедолжнопереноситьсянановуюстрочкуиневыходитьзаграницы',
          ],
        },
      ]}
      AppWrapper={AppWrapper}
    >
      {(props: AlertProps) => <Alert {...props} style={{ position: 'relative' }} />}
    </ComponentPlayground>
  );
};
