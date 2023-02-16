import * as React from 'react';
import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
  IconExampleForOverlayBasedOnImageBaseSize,
} from '../../testing/icons';
import { Image } from './Image';

const base64Image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+' +
  '0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2' +
  'xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY' +
  'gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA' +
  'SUVORK5CYII=';

describe('Image', () => {
  describeScreenshotFuzz(Image, [
    {
      src: [undefined, base64Image],
      fallbackIcon: [undefined, <IconExampleForFallbackBasedOnImageBaseSize key="fallback-icon" />],
    },
    {
      withBorder: [undefined, false],
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
  ]);
});
