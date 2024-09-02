import { Icon16Clear, Icon20AppleOutline, Icon20User } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { IconButton } from '../IconButton/IconButton';
import { FormField, type FormFieldOwnProps } from './FormField';

export const FormFieldPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          before: [<Icon20User key="before" />, undefined],
          after: [
            <IconButton onClick={noop} label="Очистить" key="after">
              <Icon16Clear />
            </IconButton>,
            undefined,
          ],
          status: ['default', 'error', 'valid'],
          mode: ['default', 'plain'],
        },
        {
          before: [<Icon20User key="before" />],
          after: [<Icon20AppleOutline key="before" />],
          afterAlign: ['start', 'center', 'end'],
          beforeAlign: ['start', 'center', 'end'],
        },
        {
          before: [<Icon20User key="before" />],
          after: [
            <IconButton onClick={noop} label="Очистить" key="after">
              <Icon16Clear />
            </IconButton>,
          ],
          disabled: [true],
        },
      ]}
    >
      {(props: FormFieldOwnProps) => (
        <FormField {...props}>
          <textarea
            style={{
              width: '100%',
              margin: 0,
              paddingBlock: '10px',
              border: 'none',
              background: 'transparent',
              resize: 'none',
            }}
          >
            Lorem ipsum dolor sit amet
          </textarea>
        </FormField>
      )}
    </ComponentPlayground>
  );
};
