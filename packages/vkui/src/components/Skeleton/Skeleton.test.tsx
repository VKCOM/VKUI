import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Skeleton, type SkeletonProps } from './Skeleton';
import styles from './Skeleton.module.css';

describe('Skeleton', () => {
  baselineComponent(Skeleton);

  it.each<{
    props: Partial<SkeletonProps>;
    cssVariable?: string;
    expectedValue?: string;
    className?: string;
  }>([
    {
      props: {
        colorFrom: '#000',
      },
      cssVariable: '--vkui_internal--skeleton_color_from',
      expectedValue: '#000',
    },
    {
      props: {
        colorTo: '#fff',
      },
      cssVariable: '--vkui_internal--skeleton_color_to',
      expectedValue: '#fff',
    },
    {
      props: {
        duration: 100,
      },
      cssVariable: '--vkui_internal--skeleton_animation_duration',
      expectedValue: '100s',
    },
    {
      props: {
        noAnimation: true,
      },
      className: styles['Skeleton--disableAnimation'],
    },
  ])(
    'should have $cssVariable = $expectedValue with props $props',
    ({ props, expectedValue, cssVariable, className }) => {
      render(<Skeleton {...props} data-testid="skeleton" />);
      expectedValue &&
        cssVariable &&
        expect(screen.getByTestId('skeleton')).toHaveStyle(`${cssVariable}: ${expectedValue}`);
      className && expect(screen.getByTestId('skeleton')).toHaveClass(className);
    },
  );
});
