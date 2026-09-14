import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { baselineComponent } from '../../testing/utils';
import { Flex, type FlexProps } from './Flex';
import styles from './Flex.module.css';
import gapStyles from '../../styles/gaps.module.css';

describe(Flex, () => {
  baselineComponent(Flex);

  it('should have css custom variable with gaps values for several child', () => {
    render(
      <Flex gap={[15, 20]} data-testid="flex">
        <div></div>
        <div></div>
      </Flex>,
    );
    expect(
      getComputedStyle(screen.getByTestId('flex')).getPropertyValue('--vkui_internal--row_gap'),
    ).toBe('15px');
    expect(
      getComputedStyle(screen.getByTestId('flex')).getPropertyValue('--vkui_internal--column_gap'),
    ).toBe('20px');
  });

  it('should not have css custom variable with gaps values for one child', () => {
    render(
      <Flex gap={[15, 20]} data-testid="flex">
        <div></div>
      </Flex>,
    );
    expect(
      getComputedStyle(screen.getByTestId('flex')).getPropertyValue('--vkui_internal--row_gap'),
    ).not.toBe('20px');
    expect(
      getComputedStyle(screen.getByTestId('flex')).getPropertyValue('--vkui_internal--column_gap'),
    ).not.toBe('15px');
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
    expect(
      getComputedStyle(screen.getByTestId('parent')).getPropertyValue('--vkui_internal--row_gap'),
    ).toBe('20px');
    expect(
      getComputedStyle(screen.getByTestId('child')).getPropertyValue('--vkui_internal--row_gap'),
    ).toBe('0px');
  });

  describe('check correct classNames', () => {
    it.each<{ props: Partial<FlexProps>; className: string }>([
      {
        props: {
          noWrap: false,
        },
        className: styles.wrap,
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
        className: styles.directionColumn,
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
        className: gapStyles.columnGapL,
      },
      {
        props: {
          gap: ['l', 'l'],
        },
        className: gapStyles.rowGapL,
      },
      {
        props: {
          align: 'center',
        },
        className: styles.alignCenter,
      },
      {
        props: {
          justify: 'center',
        },
        className: styles.justifyCenter,
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
