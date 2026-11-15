import { Icon24AddOutline, Icon24StarCircleFillGreen } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { ImageBase, type ImageBaseProps } from './ImageBase';

export const ImageWithFilter = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        size: [72],
        src: [
          withLabel(
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1AQMAAADbKDEzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURf8AwIKGy4cAAAAOSURBVBjTY2AYBUMBAAABqAABpqpmMQAAAABJRU5ErkJggg==',
            'base64',
          ),
        ],
        filter: ['blur(4px)'],
      },
    ]}
  >
    {(props: ImageBaseProps) => (
      <ImageBase {...props}>
        <ImageBase.Overlay visibility="always">
          <Icon24AddOutline />
        </ImageBase.Overlay>
        <ImageBase.Badge background="stroke">
          <Icon24StarCircleFillGreen />
        </ImageBase.Badge>
      </ImageBase>
    )}
  </ComponentPlayground>
);
