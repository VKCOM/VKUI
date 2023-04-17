import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { BREAKPOINTS } from '../../shared/breakpoints';
import { SizeType } from '../../vkui';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
import { AppearanceProvider } from '../AppearanceProvider/AppearanceProvider';
import { Textarea, type TextareaProps } from './Textarea';

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
          defaultValue: [
            'Музыка\nСпорт\nФотография\nПлавание\nПрограммирование\nПутешествия\nКниги\nСериалы\nФильмы\nНастольные игры',
          ],
        },
        {
          status: ['error', 'valid'],
        },
      ]}
    >
      {(props: TextareaProps) => <Textarea {...props} />}
    </ComponentPlayground>
  );
};

export const TextareaTestFitSizeToContentPlayground = ({
  appearance,
}: ComponentPlaygroundProps) => {
  return (
    <AppRoot
      mode="embedded"
      style={{
        height: 'auto',
        position: 'absolute',
        width: BREAKPOINTS.MOBILE,
      }}
    >
      <AppearanceProvider appearance={appearance}>
        <AdaptivityProvider sizeY={SizeType.REGULAR}>
          <Textarea id="textarea" />
        </AdaptivityProvider>
      </AppearanceProvider>
    </AppRoot>
  );
};
