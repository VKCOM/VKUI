import { render, screen } from '@testing-library/react';
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
    expect(screen.getByTestId('flex')).toHaveStyle('--vkui_internal--row_gap: 20px');
    expect(screen.getByTestId('flex')).toHaveStyle('--vkui_internal--column_gap: 15px');
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

  describe('check correct classNames', () => {
    it.each<{ props: Partial<FlexProps>; className: string }>([
      {
        props: {
          noWrap: false,
        },
        className: styles['Flex--wrap'],
      },
      {
        props: {
          reverse: true,
        },
        className: styles['Flex--reverse'],
      },
      {
        props: {
          direction: 'column',
        },
        className: styles['Flex--direction-column'],
      },
      {
        props: {
          margin: 'auto',
        },
        className: styles['Flex--margin-auto'],
      },
      {
        props: {
          gap: ['l', 'l'],
        },
        className: gapStyles['-column-gap--l'],
      },
      {
        props: {
          gap: ['l', 'l'],
        },
        className: gapStyles['-row-gap--l'],
      },
      {
        props: {
          align: 'center',
        },
        className: styles['Flex--align-center'],
      },
      {
        props: {
          justify: 'center',
        },
        className: styles['Flex--justify-center'],
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
