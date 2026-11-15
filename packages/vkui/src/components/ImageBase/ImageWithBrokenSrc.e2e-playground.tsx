import { Icon36Done } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ImageBase, type ImageBaseProps } from './ImageBase';

export const ImageWithBrokenSrc = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        size: [96],
        src: ['no-image'],
        alt: [undefined, 'fallback text'],
        fallbackIcon: [undefined, <Icon36Done key="icon-fallback" />],
      },
    ]}
  >
    {(props: ImageBaseProps) => <ImageBase {...props} />}
  </ComponentPlayground>
);
