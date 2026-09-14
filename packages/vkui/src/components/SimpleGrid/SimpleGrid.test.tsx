import { render, screen } from '@testing-library/react';
import { classNames } from '@vkontakte/vkjs';
import { describe, expect, it } from 'vitest';
import { baselineComponent } from '../../testing/utils';
import { SimpleGrid, type SimpleGridProps } from './SimpleGrid';
import styles from './SimpleGrid.module.css';
import gapsStyles from '../../styles/gaps.module.css';

describe('SimpleGrid', () => {
  baselineComponent(SimpleGrid);

  it('should have correct styles', () => {
    render(
      <SimpleGrid data-testid="grid" gap={[10, 15]} columns={2} minColWidth={150}>
        <div></div>
      </SimpleGrid>,
    );
    expect(
      getComputedStyle(screen.getByTestId('grid')).getPropertyValue('--vkui_internal--row_gap'),
    ).toBe('10px');
    expect(
      getComputedStyle(screen.getByTestId('grid')).getPropertyValue('--vkui_internal--column_gap'),
    ).toBe('15px');
    expect(
      getComputedStyle(screen.getByTestId('grid')).getPropertyValue(
        '--vkui_internal--grid_columns',
      ),
    ).toBe('2');
    expect(
      getComputedStyle(screen.getByTestId('grid')).getPropertyValue(
        '--vkui_internal--min_col_width',
      ),
    ).toBe('150px');
  });

  it.each<{ props: Partial<SimpleGridProps>; className: string }>([
    {
      props: {
        gap: ['l', 'm'],
      },
      className: classNames(gapsStyles.columnGapM, gapsStyles.rowGapL),
    },
    {
      props: {
        minColWidth: 100,
      },
      className: styles.withMinWidth,
    },
    {
      props: {
        align: 'center',
      },
      className: styles.alignCenter,
    },
    {
      props: {
        margin: 'auto-block',
      },
      className: styles.marginAutoBlock,
    },
  ])('should have className $className with props $props', ({ props, className }) => {
    render(
      <SimpleGrid {...props} data-testid="grid">
        <div></div>
      </SimpleGrid>,
    );
    expect(screen.getByTestId('grid')).toHaveClass(className);
  });
});
