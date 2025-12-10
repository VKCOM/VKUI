import {
  AppDefaultWrapper,
  type AppDefaultWrapperProps,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { Alert, type AlertActionInterface, type AlertProps } from './Alert';

const AppWrapper = ({ children, ...restProps }: AppDefaultWrapperProps) => (
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
            withLabel(
              'Оченьоченьоченьдлинноенеразрывноеслововзаголовкекотороедолжнопереноситьсянановуюстрочкуиневыходитьзаграницы',
              'Very long title',
            ),
          ],
          description: [
            withLabel(
              'Оченьоченьоченьдлинноенеразрывноеслововописаниикотороедолжнопереноситьсянановуюстрочкуиневыходитьзаграницы',
              'Very long description',
            ),
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
