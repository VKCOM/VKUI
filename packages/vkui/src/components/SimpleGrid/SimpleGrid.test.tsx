import { render, screen } from '@testing-library/react';
import { classNames } from '@vkontakte/vkjs';
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
    expect(screen.getByTestId('grid')).toHaveStyle(
      '--vkui_internal--row_gap: 10px; --vkui_internal--column_gap: 15px; --vkui_internal--grid_columns: 2; --vkui_internal--min_col_width: 150px',
    );
  });

  it.each<{ props: Partial<SimpleGridProps>; className: string }>([
    {
      props: {
        gap: ['l', 'm'],
      },
      className: classNames(gapsStyles['-column-gap--m'], gapsStyles['-row-gap--l']),
    },
    {
      props: {
        minColWidth: 100,
      },
      className: styles['SimpleGrid--with-min-width'],
    },
    {
      props: {
        align: 'center',
      },
      className: styles['SimpleGrid--align-center'],
    },
    {
      props: {
        margin: 'auto-block',
      },
      className: styles['SimpleGrid--margin-auto-block'],
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
