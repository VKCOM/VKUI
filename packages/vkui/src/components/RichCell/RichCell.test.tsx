import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { RichCell, type RichCellProps } from './RichCell';
import styles from './RichCell.module.css';

describe('RichCell', () => {
  baselineComponent((props) => <RichCell {...props}>RichCell</RichCell>);

  it.each<[Exclude<RichCellProps['afterAlign'], undefined>, string, string]>([
    ['start', styles.content, styles.contentAfterAlignStart],
    ['center', styles.inWrapper, styles.contentAfterAlignCenter],
    ['end', styles.inWrapper, styles.contentAfterAlignEnd],
  ])(
    'should have correct position of after element',
    (afterAlign, expectedContainerStyle, alignClassName) => {
      const { container } = render(
        <RichCell
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
      const expectedContainer = container.getElementsByClassName(expectedContainerStyle)[0];
      const afterElement = Array.prototype.find.call(
        expectedContainer.children,
        (element: HTMLElement) => {
          return element.classList.contains(alignClassName);
        },
      );
      expect(afterElement).toBeTruthy();
    },
  );
});
