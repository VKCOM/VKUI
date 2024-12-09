import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { RichCell, type RichCellProps } from './RichCell';
import styles from './RichCell.module.css';

describe('RichCell', () => {
  baselineComponent((props) => <RichCell {...props}>RichCell</RichCell>);

  it.each<[Exclude<RichCellProps['afterAlign'], undefined>, string, string]>([
    ['start', styles.content, styles.alignSelfStart],
    ['center', styles.inWrapper, styles.alignSelfCenter],
    ['end', styles.inWrapper, styles.alignSelfEnd],
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

  it.each<[Exclude<RichCellProps['contentAlign'], undefined>, string]>([
    ['start', styles.contentAlignStart],
    ['center', styles.contentAlignCenter],
    ['end', styles.contentAlignEnd],
  ])('should have correct content alignment', (contentAlign, expectedClassName) => {
    const { container } = render(
      <RichCell contentAlign={contentAlign} overTitle="Subhead" subtitle="Text">
        Children
      </RichCell>,
    );

    const contentElement = container.getElementsByClassName(styles.contentBefore)[0];
    expect(contentElement.classList.contains(expectedClassName)).toBeTruthy();
  });

  it.each<[Exclude<RichCellProps['beforeAlign'], undefined>, string]>([
    ['start', styles.alignSelfStart],
    ['center', styles.alignSelfCenter],
    ['end', styles.alignSelfEnd],
  ])('should have correct before element alignment', (beforeAlign, expectedClassName) => {
    const { container } = render(
      <RichCell beforeAlign={beforeAlign} before={<div data-testid="before" />}>
        Children
      </RichCell>,
    );

    const beforeElement = container.getElementsByClassName(styles.before)[0];
    expect(beforeElement.classList.contains(expectedClassName)).toBeTruthy();
  });
});
