import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { RichCell, type RichCellProps } from './RichCell';
import styles from './RichCell.module.css';

describe('RichCell', () => {
  baselineComponent((props) => <RichCell {...props}>RichCell</RichCell>);

  it.each<[Exclude<RichCellProps['afterAlign'], undefined>, string, string]>([
    ['start', styles['RichCell__content'], styles['RichCell__content-after--align-start']],
    ['center', styles['RichCell'], styles['RichCell__content-after--align-center']],
    ['end', styles['RichCell'], styles['RichCell__content-after--align-end']],
  ])(
    'should have correct position of after element',
    (afterAlign, expectedContainerStyle, alignClassName) => {
      const { container } = render(
        <RichCell
          subhead="Subhead"
          text="Text"
          caption="Caption"
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
