import * as React from 'react';
import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
  IconExampleForOverlayBasedOnImageBaseSize,
} from '../../testing/icons';
import { Image, type ImageProps } from './Image';

const base64Image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+' +
  '0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2' +
  'xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY' +
  'gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA' +
  'SUVORK5CYII=';

const base64ImageValue = withLabel(base64Image, 'base64');

export const ImagePlayground = (props: ComponentPlaygroundProps) => {
  const [removeSrc, setRemoveSrc] = React.useState(base64Image);

  React.useEffect(() => setRemoveSrc(''), []);

  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          src: [undefined, base64ImageValue],
          fallbackIcon: [
            undefined,
            <IconExampleForFallbackBasedOnImageBaseSize key="fallback-icon" />,
          ],
        },
        {
          noBorder: [undefined, true],
        },
        {
          withTransparentBackground: [undefined, true],
        },
        {
          size: [96, 24],
          children: [
            <Image.Badge key="example-icon">
              <IconExampleForBadgeBasedOnImageBaseSize />
            </Image.Badge>,
            <Image.Badge key="example-icon-with-bg-stroke" background="stroke">
              <IconExampleForBadgeBasedOnImageBaseSize />
            </Image.Badge>,
          ],
        },
        {
          size: [72],
          children: [
            <Image.Badge key="example-icon-with-bg-stroke" background="stroke">
              <IconExampleForBadgeBasedOnImageBaseSize />
            </Image.Badge>,

            <React.Fragment key="overlay-base">
              <Image.Badge background="stroke">
                <IconExampleForBadgeBasedOnImageBaseSize />
              </Image.Badge>
              <Image.Overlay theme="light" visibility="always">
                <IconExampleForOverlayBasedOnImageBaseSize />
              </Image.Overlay>
            </React.Fragment>,

            <React.Fragment key="overlay-dark-always">
              <Image.Badge background="stroke">
                <IconExampleForBadgeBasedOnImageBaseSize />
              </Image.Badge>
              <Image.Overlay theme="dark" visibility="always">
                <Icon20GiftCircleFillRed width={32} height={32} />
              </Image.Overlay>
            </React.Fragment>,
          ],
        },
        {
          src: [base64ImageValue],
          widthSize: [64],
          heightSize: [48],
        },
        {
          src: [base64ImageValue],
          widthSize: [48],
          heightSize: [64],
        },
        {
          borderRadius: ['s'],
          borderStartStartRadius: ['l'],
        },
        {
          borderRadius: ['s'],
          borderStartEndRadius: ['l'],
        },
        {
          borderRadius: ['s'],
          borderEndStartRadius: ['l'],
        },
        {
          borderRadius: ['s'],
          borderEndEndRadius: ['l'],
        },
        {
          src: [base64ImageValue],
          children: ['CH'],
        },
        {
          // Проверяем что фон не убирается если убрать ссылку
          src: [removeSrc],
        },
      ]}
    >
      {(props: ImageProps) => <Image {...props} />}
    </ComponentPlayground>
  );
};

export const ImageFocusVisiblePlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        size: [72],
        src: [base64ImageValue],
      },
    ]}
  >
    {(props: ImageProps) => <Image onClick={noop} {...props} />}
  </ComponentPlayground>
);

export const ImageFocusVisibleOverlayPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        size: [72],
        src: [base64ImageValue],
        children: [
          <React.Fragment key="overlay-base">
            <Image.Overlay theme="light" visibility="always" onClick={noop}>
              <IconExampleForOverlayBasedOnImageBaseSize />
            </Image.Overlay>
          </React.Fragment>,
        ],
      },
    ]}
  >
    {(props: ImageProps) => <Image {...props} />}
  </ComponentPlayground>
);
