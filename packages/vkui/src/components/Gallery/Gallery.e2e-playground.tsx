import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Flex } from '../Flex/Flex';
import { Gallery, type GalleryProps } from './Gallery';

const Slide = ({
  children,
  width,
  backgroundColor,
}: {
  children: React.ReactNode;
  width?: string | number;
  backgroundColor: string;
}) => (
  <Flex justify="center" align="center" style={{ fontSize: '72px', width, backgroundColor }}>
    {children}
  </Flex>
);

const getItems = () => {
  const colors = [
    'var(--vkui--color_background_negative)',
    'var(--vkui--color_background_positive)',
    'var(--vkui--color_background_accent)',
    'var(--vkui--color_background_negative)',
    'var(--vkui--color_background_positive)',
  ];
  return new Array(5).fill(0).map((_, index) => {
    return (
      <Slide key={index} backgroundColor={colors[index]}>
        {index + 1}
      </Slide>
    );
  });
};

export const GalleryPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          looped: [false, true],
          align: ['center', 'left'],
          bullets: ['light', 'dark', false],
          slideWidth: ['90%', '100%'],
        },
      ]}
    >
      {(props: GalleryProps) => (
        <Gallery initialSlideIndex={0} {...props}>
          {getItems()}
        </Gallery>
      )}
    </ComponentPlayground>
  );
};

export const GalleryWithArrowsPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground {...props}>
      {(props: GalleryProps) => (
        <Gallery initialSlideIndex={1} data-testid="gallery" arrowSize="m" showArrows {...props}>
          {getItems()}
        </Gallery>
      )}
    </ComponentPlayground>
  );
};
