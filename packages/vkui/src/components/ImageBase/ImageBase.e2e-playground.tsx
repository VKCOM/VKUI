import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { ColorSchemeProvider } from '../ColorSchemeProvider/ColorSchemeProvider';
import { ImageBase, type ImageBaseProps } from './ImageBase';

const base64Image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+' +
  '0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2' +
  'xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY' +
  'gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA' +
  'SUVORK5CYII=';

export const ImageWithParentWithBorderRadius = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        size: [72],
        src: [withLabel(base64Image, 'base64')],
      },
    ]}
  >
    {(props: ImageBaseProps) => (
      <div
        style={{
          margin: '20px',
          width: '72px',
          height: '72px',
          borderRadius: '8px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Специально оборачиваем в провайдер, чтобы фон ImageBase бы темныи и выглядывал
         /* из-за img если img не полностью перекрывает ImageBase
          */}
        <ColorSchemeProvider value="dark">
          <ImageBase
            {...props}
            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
          />
        </ColorSchemeProvider>
      </div>
    )}
  </ComponentPlayground>
);
