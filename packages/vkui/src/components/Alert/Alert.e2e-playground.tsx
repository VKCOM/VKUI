import {
  AppDefaultWrapper,
  type AppWrapperProps,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { Alert, type AlertActionInterface, type AlertProps } from './Alert';

const AppWrapper = ({ children, ...restProps }: AppWrapperProps) => (
  <AppDefaultWrapper scroll="contain" disablePortal {...restProps}>
    {children}
  </AppDefaultWrapper>
);

const cancel: AlertActionInterface = { mode: 'cancel', title: 'Cancel' };
const action: AlertActionInterface = { mode: 'default', title: 'Action' };
const destroy: AlertActionInterface = { mode: 'destructive', title: 'Destroy' };

const baseRender = (props: AlertProps) => (
  <Alert
    title="Подтвердите действие"
    description="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
    style={{ position: 'relative' }}
    autoFocus={false}
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
          title: [
            'Оченьоченьоченьдлинноенеразрывноеслововзаголовкекотороедолжнопереноситьсянановуюстрочкуиневыходитьзаграницы',
          ],
          description: [
            'Оченьоченьоченьдлинноенеразрывноеслововописаниикотороедолжнопереноситьсянановуюстрочкуиневыходитьзаграницы',
          ],
        },
      ]}
      AppWrapper={AppWrapper}
    >
      {(props: AlertProps) => (
        <Alert {...props} autoFocus={false} style={{ position: 'relative' }} />
      )}
    </ComponentPlayground>
  );
};
