import { Icon20CopyOutline, Icon20TrashSimpleOutline } from '@vkontakte/icons';
import {
  AppDefaultWrapper,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { BREAKPOINTS } from '../../lib/adaptivity';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ColorSchemeProvider } from '../ColorSchemeProvider/ColorSchemeProvider';
import { Div } from '../Div/Div';
import { Flex } from '../Flex/Flex';
import { IconButton } from '../IconButton/IconButton';
import { Textarea, type TextareaProps } from './Textarea';

const longMultilineValueExample = withLabel(
  'Музыка\nСпорт\nФотография\nПлавание\nПрограммирование\nПутешествия\nКниги\nСериалы\nФильмы\nНастольные игры',
  'Long multiline value',
);

export const TextareaPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          value: ['', 'text'],
          placeholder: ['placeholder'],
          disabled: [undefined, true],
        },
        {
          value: ['text', '1\n2\n3\n4\n5'],
          $adaptivity: 'y',
        },
        {
          grow: [false],
          value: ['1\n2\n3\n4\n5'],
        },
        {
          cols: [4],
          defaultValue: [longMultilineValueExample],
        },
        {
          status: ['error', 'valid'],
        },
        {
          align: ['center', 'right'],
          defaultValue: [longMultilineValueExample],
        },
        {
          mode: ['plain'],
          placeholder: ['placeholder'],
        },
        {
          after: [
            <Flex key="flex" direction="column">
              <IconButton label="Скопировать">
                <Icon20CopyOutline />
              </IconButton>
              <IconButton label="Очистить">
                <Icon20TrashSimpleOutline />
              </IconButton>
            </Flex>,
          ],
          defaultValue: [longMultilineValueExample],
          afterAlign: ['start', 'end'],
        },
      ]}
    >
      {(props: TextareaProps) => <Textarea {...props} />}
    </ComponentPlayground>
  );
};

export const TextareaStatePlayground = ({ colorScheme }: ComponentPlaygroundProps) => {
  return (
    <AppDefaultWrapper
      disableDecorations
      style={{
        height: 'auto',
        width: BREAKPOINTS.MOBILE,
      }}
    >
      <ColorSchemeProvider value={colorScheme}>
        <AdaptivityProvider sizeY="regular">
          <Div style={{ padding: 10 }}>
            <Textarea id="textarea" />
          </Div>
        </AdaptivityProvider>
      </ColorSchemeProvider>
    </AppDefaultWrapper>
  );
};
