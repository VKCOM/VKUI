import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { getValueByKey } from '../../helpers/getValueByKey';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Button } from '../Button/Button';
import { Placeholder } from '../Placeholder/Placeholder';
import { Carousel, type CarouselProps } from './Carousel';

const story: Meta<CarouselProps> = {
  title: 'Data Display/Carousel',
  component: Carousel,
  parameters: createStoryParameters('Carousel', CanvasFullLayout, DisableCartesianParam),
  tags: ['Отображение данных'],
};

export default story;

type Story = StoryObj<CarouselProps>;

export const Playground: Story = {
  render: (args) => (
    <Carousel
      {...args}
      style={{
        width: 800,
        height: 400,
        maxWidth: '100%',
        maxHeight: '100%',
        border: '1px solid black',
        ...args.style,
      }}
      aria-label="Карусель с картинкой"
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
    </Carousel>
  ),
};

export const WithAutoPlay: Story = {
  render: (args) => (
    <Carousel
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
      timeout={3000}
      aria-label="Карусель с автоплеем"
    >
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_negative)' }}
        title="Слайд 1"
      />
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_positive)' }}
        title="Слайд 2"
      />
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_accent)' }}
        title="Слайд 3"
      />
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_negative)' }}
        title="Слайд 4"
      />
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_positive)' }}
        title="Слайд 5"
      />
    </Carousel>
  ),
};

export const WithBulletsAndArrows: Story = {
  render: (args) => (
    <Carousel
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
      bullets="dark"
      showArrows
      aria-label="Карусель с bullets и стрелками"
    >
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_negative)' }}
        title="Слайд 1"
      />
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_positive)' }}
        title="Слайд 2"
      />
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_accent)' }}
        title="Слайд 3"
      />
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_negative)' }}
        title="Слайд 4"
      />
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_positive)' }}
        title="Слайд 5"
      />
    </Carousel>
  ),
};

export const CenterAlign: Story = {
  render: (args) => (
    <Carousel
      {...args}
      style={{
        width: 800,
        height: 400,
        maxWidth: '100%',
        maxHeight: '100%',
        border: '1px solid black',
        ...args.style,
      }}
      slideWidth="70%"
      align="center"
      bullets="light"
      showArrows
      aria-label="Карусель с центрированием"
    >
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_negative)' }}
        title="Слайд 1"
      />
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_positive)' }}
        title="Слайд 2"
      />
      <Placeholder
        style={{ backgroundColor: 'var(--vkui--color_background_accent)' }}
        title="Слайд 3"
      />
    </Carousel>
  ),
};

export const WithManySlides: Story = {
  render: (args) => (
    <Carousel
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
      bullets="dark"
      showArrows
      arrowAreaHeight="fit"
      aria-label="Карусель с большим количеством слайдов"
    >
      {Array.from({ length: 10 }, (_, i) => (
        <Placeholder
          key={i}
          style={{
            backgroundColor: `var(--vkui--color_background_${
              i % 3 === 0 ? 'negative' : i % 3 === 1 ? 'positive' : 'accent'
            })`,
          }}
          title={`Слайд ${i + 1}`}
        />
      ))}
    </Carousel>
  ),
};

export const RightAlign: Story = {
  render: (args) => (
    <Carousel
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
      align="right"
      bullets="dark"
      showArrows
      aria-label="Карусель с выравниванием по правому краю"
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
    </Carousel>
  ),
};

export const WithCustomSlideWidth: Story = {
  render: (args) => (
    <Carousel
      {...args}
      style={{
        width: 800,
        height: 400,
        maxWidth: '100%',
        maxHeight: '100%',
        border: '1px solid black',
        ...args.style,
      }}
      slideWidth="custom"
      bullets="dark"
      showArrows
      aria-label="Карусель с кастомной шириной слайдов"
    >
      <div
        style={{
          width: 300,
          height: '100%',
          backgroundColor: 'var(--vkui--color_background_negative)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 24,
        }}
      >
        Узкий слайд
      </div>
      <div
        style={{
          width: 500,
          height: '100%',
          backgroundColor: 'var(--vkui--color_background_positive)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 24,
        }}
      >
        Широкий слайд
      </div>
      <div
        style={{
          width: 400,
          height: '100%',
          backgroundColor: 'var(--vkui--color_background_accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 24,
        }}
      >
        Средний слайд
      </div>
    </Carousel>
  ),
};

export const WithImages: Story = {
  render: (args) => (
    <Carousel
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
      bullets="dark"
      showArrows
      timeout={4000}
      aria-label="Карусель с изображениями"
    >
      <img
        src="https://placebear.com/800/400"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        alt="Медведь 1"
      />
      <img
        src="https://placebear.com/800/400"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        alt="Медведь 2"
      />
      <img
        src="https://placebear.com/800/400"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        alt="Медведь 3"
      />
      <img
        src="https://placebear.com/800/400"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        alt="Медведь 4"
      />
    </Carousel>
  ),
};

const ControlledStateExample = (args: CarouselProps) => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const slidesCount = 2;

  const onChange = React.useCallback((i: number) => {
    setSlideIndex(i);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Carousel
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
        slideIndex={slideIndex}
        onChange={onChange}
        bullets="dark"
        showArrows
        aria-label="Карусель с контролируемым состоянием"
      >
        {Array.from({ length: slidesCount }, (_, i) => (
          <Placeholder
            key={i}
            style={{
              backgroundColor: `var(--vkui--color_background_${
                i % 3 === 0 ? 'negative' : i % 3 === 1 ? 'positive' : 'accent'
              })`,
            }}
            title={`Слайд ${i + 1}`}
          />
        ))}
      </Carousel>
      <div
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          size="s"
          onClick={() => setSlideIndex((slideIndex - 1 + slidesCount) % slidesCount)}
        >
          Предыдущий
        </Button>
        <span style={{ minWidth: 100, textAlign: 'center' }}>
          {slideIndex + 1} / {slidesCount}
        </span>
        <Button size="s" onClick={() => setSlideIndex((slideIndex + 1) % slidesCount)}>
          Следующий
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {Array.from({ length: slidesCount }, (_, i) => (
          <Button
            key={i}
            size="s"
            mode={slideIndex === i ? 'primary' : 'secondary'}
            onClick={() => setSlideIndex(i)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export const ControlledState: Story = {
  render: ControlledStateExample,
};
