import type { Meta, StoryFn } from '@storybook/react';
import { getValueByKey } from '../../helpers/getValueByKey';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Gallery, type GalleryProps } from './Gallery';

const story: Meta<GalleryProps> = {
  title: 'Data Display/Gallery',
  component: Gallery,
  parameters: createStoryParameters('Gallery', CanvasFullLayout, DisableCartesianParam, {
    liveCodeEditor: {
      scope: {
        getValueByKey,
      },
    },
  }),
  tags: ['Отображение данных'],
};

export default story;

export const Playground: StoryFn<GalleryProps> = (args: GalleryProps) => (
  <Gallery
    {...args}
    style={{
      width: 800,
      height: 400,
      maxWidth: '100%',
      maxHeight: '100%',
      border: '1px solid black',
      ...args.style,
    }}
    slideWidth="90%"
    aria-label="Галерея с картинкой"
    slideLabel={(index, slidesCount) => {
      const additionLabel = getValueByKey(
        index,
        {
          0: 'Картинка с двумя медведями',
          1: 'Красный цвет фона',
          2: 'Акцентный цвет фона',
        },
        '',
      );
      return `${index + 1} из ${slidesCount} ${additionLabel}`;
    }}
  >
    <img src="https://placebear.com/1024/640" style={{ display: 'block' }} alt="Два медведя" />
    <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
    <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
  </Gallery>
);
