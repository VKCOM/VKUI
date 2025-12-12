import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Flex, type FlexProps } from './Flex';
import styles from './Flex.module.css';

describe(Flex, () => {
  baselineComponent(Flex);

  it('should have css custom variable with gaps values for several child', () => {
    render(
      <Flex gap={[15, 20]} data-testid="flex">
        <div></div>
        <div></div>
      </Flex>,
    );
    expect(screen.getByTestId('flex')).toHaveStyle('--vkui_internal--row_gap: 15px');
    expect(screen.getByTestId('flex')).toHaveStyle('--vkui_internal--column_gap: 20px');
  });

  it('should not have css custom variable with gaps values for one child', () => {
    render(
      <Flex gap={[15, 20]} data-testid="flex">
        <div></div>
      </Flex>,
    );
    expect(screen.getByTestId('flex')).not.toHaveStyle('--vkui_internal--row_gap: 20px');
    expect(screen.getByTestId('flex')).not.toHaveStyle('--vkui_internal--column_gap: 15px');
  });

  it('should reset gap in nested flex', () => {
    render(
      <Flex gap={20} data-testid="parent">
        <div />
        <Flex data-testid="child">
          <div />
          <div />
        </Flex>
      </Flex>,
    );
    expect(screen.getByTestId('parent')).toHaveStyle('--vkui_internal--row_gap: 20px');
    expect(screen.getByTestId('child')).toHaveStyle('--vkui_internal--row_gap: 0px');
  });

  describe('check correct classNames', () => {
    it.each<{ props: Partial<FlexProps>; className: string }>([
      {
        props: {
          noWrap: false,
        },
        className: 'vkui-flex-wrap',
      },
      {
        props: {
          reverse: true,
        },
        className: styles.reverse,
      },
      {
        props: {
          direction: 'column',
        },
        className: 'vkui-direction-column',
      },
      {
        props: {
          margin: 'auto',
        },
        className: styles.marginAuto,
      },
      {
        props: {
          gap: ['l', 'l'],
        },
        className: 'vkui-column_gap-l',
      },
      {
        props: {
          gap: ['l', 'l'],
        },
        className: 'vkui-row_gap-l',
      },
      {
        props: {
          align: 'center',
        },
        className: 'vkui-align-center',
      },
      {
        props: {
          justify: 'center',
        },
        className: 'vkui-justify-center',
      },
    ])('should have className $className with props $props', ({ props, className }) => {
      render(
        <Flex {...props} data-testid="flex">
          <div></div>
          <div></div>
        </Flex>,
      );
      expect(screen.getByTestId('flex')).toHaveClass(className);
    });
  });
});
