import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { RichCell, type RichCellProps } from './RichCell';
import styles from './RichCell.module.css';

describe('RichCell', () => {
  baselineComponent((props) => <RichCell {...props}>RichCell</RichCell>);

  it.each<[Exclude<RichCellProps['afterAlign'], undefined>, string]>([
    ['start', styles.alignAfterStart],
    ['center', styles.alignAfterCenter],
    ['end', styles.alignAfterEnd],
  ])('should have correct position of after element', (afterAlign, alignClassName) => {
    render(
      <RichCell
        data-testid="rich-cell"
        overTitle="Subhead"
        subtitle="Text"
        extraSubtitle="Caption"
        afterAlign={afterAlign}
        after={<div data-testid="after" />}
        afterCaption="After Caption"
      >
        Children
      </RichCell>,
    );
    expect(screen.getByTestId('rich-cell')).toHaveClass(alignClassName);
  });

  it.each<[Exclude<RichCellProps['contentAlign'], undefined>, string]>([
    ['start', styles.contentAlignStart],
    ['center', styles.contentAlignCenter],
    ['end', styles.contentAlignEnd],
  ])('should have correct content alignment', (contentAlign, expectedClassName) => {
    render(
      <RichCell
        contentAlign={contentAlign}
        data-testid="rich-cell"
        overTitle="Subhead"
        subtitle="Text"
      >
        Children
      </RichCell>,
    );
    expect(screen.getByTestId('rich-cell')).toHaveClass(expectedClassName);
  });

  it.each<[Exclude<RichCellProps['beforeAlign'], undefined>, string]>([
    ['start', styles.alignBeforeStart],
    ['center', styles.alignBeforeCenter],
    ['end', styles.alignBeforeEnd],
  ])('should have correct before element alignment', (beforeAlign, expectedClassName) => {
    render(
      <RichCell
        beforeAlign={beforeAlign}
        data-testid="rich-cell"
        before={<div data-testid="before" />}
      >
        Children
      </RichCell>,
    );
    expect(screen.getByTestId('rich-cell')).toHaveClass(expectedClassName);
  });
});
