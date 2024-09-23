import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { baselineComponent } from '../../../testing/utils';
import { EllipsisText } from './EllipsisText';
import styles from './EllipsisText.module.css';

const setupEllipsisOverflow = ({
  initialOffsetHeight = 0,
  initialScrollHeight = 0,
  initialOffsetWidth = 0,
  initialScrollWidth = 0,
  maxLines,
}: {
  initialOffsetHeight?: number;
  initialScrollHeight?: number;
  initialOffsetWidth?: number;
  initialScrollWidth?: number;
  maxLines?: number;
}) => {
  let content: HTMLElement;
  let offsetHeight = initialOffsetHeight;
  let scrollHeight = initialScrollHeight;
  let offsetWidth = initialOffsetWidth;
  let scrollWidth = initialScrollWidth;

  const Fixture = () => {
    return (
      <EllipsisText
        tooltipEnabled
        maxLines={maxLines}
        getRootRef={(element) => {
          if (!element) {
            return;
          }
          content = element.firstElementChild as HTMLElement;
          jest.spyOn(content, 'offsetHeight', 'get').mockImplementation(() => offsetHeight);
          jest.spyOn(content, 'scrollHeight', 'get').mockImplementation(() => scrollHeight);
          jest.spyOn(content, 'offsetWidth', 'get').mockImplementation(() => offsetWidth);
          jest.spyOn(content, 'scrollWidth', 'get').mockImplementation(() => scrollWidth);
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </EllipsisText>
    );
  };

  const result = render(<Fixture />);

  const rerender = () => {
    result.rerender(<Fixture />);
  };

  return {
    get container() {
      return result.container;
    },
    get content() {
      return content;
    },
    set offsetHeight(newValue: number) {
      offsetHeight = newValue;
    },
    set scrollHeight(newValue: number) {
      scrollHeight = newValue;
    },
    set offsetWidth(newValue: number) {
      offsetWidth = newValue;
    },
    set scrollWidth(newValue: number) {
      scrollWidth = newValue;
    },
    rerender,
  };
};

const checkShowTooltipByMouseOver = async (content: HTMLElement, needShow: boolean) => {
  fireEvent.mouseOver(content);
  await waitFor(() => {
    if (needShow) {
      expect(screen.queryByRole('tooltip')).toBeTruthy();
    } else {
      expect(screen.queryByRole('tooltip')).toBeFalsy();
    }
  });
};

describe('EllipsisText', () => {
  baselineComponent((props) => <EllipsisText {...props}>EllipsisText</EllipsisText>);

  it('should have specific className when maxLines > 1', async () => {
    render(
      <EllipsisText maxLines={2} data-testid="text-wrapper">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </EllipsisText>,
    );

    const text = screen.getByTestId('text-wrapper').firstElementChild as HTMLElement;
    expect(text).not.toBeNull();
    expect(text).toHaveClass(styles['EllipsisText__content--multiline']);
  });

  it('should show tooltip when horizontal overflow', async () => {
    const setupData = setupEllipsisOverflow({
      initialScrollWidth: 80,
      initialOffsetWidth: 60,
    });
    await checkShowTooltipByMouseOver(setupData.content, true);
  });

  it('should show tooltip when vertical overflow', async () => {
    const setupData = setupEllipsisOverflow({
      initialScrollHeight: 80,
      initialOffsetHeight: 60,
    });
    await checkShowTooltipByMouseOver(setupData.content, true);
  });

  it('check recalculate show tooltip when resize element', async () => {
    const setupData = setupEllipsisOverflow({
      initialScrollWidth: 60,
      initialOffsetWidth: 60,
    });
    // тултип не покажется, так как контент не будет обрезан
    await checkShowTooltipByMouseOver(setupData.content, false);
    setupData.scrollWidth = 80;
    // Когда CustomResizeObserver заменят на ResizeObserver тест упадет
    // Нужно будет по-другому тригерить событие ресайза или просто замокать ResizeObserver
    const iframe = setupData.container.getElementsByTagName('IFRAME')[0] as HTMLIFrameElement;
    fireEvent(iframe.contentWindow!, new Event('resize'));
    await checkShowTooltipByMouseOver(setupData.content, true);
  });
});
