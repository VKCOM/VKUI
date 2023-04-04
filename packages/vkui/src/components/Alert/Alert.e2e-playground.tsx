import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { HasChildren } from '../../types';
import { AppRoot } from '../AppRoot/AppRoot';
import { Alert, type AlertActionInterface, type AlertProps } from './Alert';

const AppWrapper = ({ children, ...restProps }: HasChildren) => (
  <AppRoot mode="embedded" scroll="contain" {...restProps}>
    {children}
  </AppRoot>
);

const cancel: AlertActionInterface = { mode: 'cancel', title: 'Cancel' };
const action: AlertActionInterface = { mode: 'default', title: 'Action' };
const destroy: AlertActionInterface = { mode: 'destructive', title: 'Destroy' };

const baseAlert = (props: AlertProps) => (
  <Alert
    header="Подтвердите действие"
    text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
    style={{ position: 'relative' }}
    {...props}
  />
);

export const AlertMobilePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<AlertProps>
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
      {baseAlert}
    </ComponentPlayground>
  );
};

export const AlertDesktopPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<AlertProps>
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
      {baseAlert}
    </ComponentPlayground>
  );
};
