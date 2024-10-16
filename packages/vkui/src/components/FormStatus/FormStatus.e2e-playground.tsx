import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { FormStatus, type FormStatusProps } from './FormStatus';

export const FormStatusPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['default', 'error'],
        },
      ]}
    >
      {(props: FormStatusProps) => (
        <FormStatus title="Некорректный мобильный номер" {...props}>
          Необходимо корректно ввести номер в международном формате
        </FormStatus>
      )}
    </ComponentPlayground>
  );
};
