import { baselineComponent } from '../../testing/utils';
import { render } from '@testing-library/react';
import PanelHeader from './PanelHeader';
import ConfigProvider from '../ConfigProvider/ConfigProvider';
import { Platform } from '../../lib/platform';

describe('PanelHeader', () => {
  baselineComponent(PanelHeader);

  it('resolves isFixed if fixed prop if it passed', () => {
    const { container, rerender } = render(<PanelHeader fixed />);
    expect((container.firstChild as HTMLElement).classList.contains('PanelHeader--fixed')).toEqual(true);
    rerender(<PanelHeader fixed={false} />);
    expect((container.firstChild as HTMLElement).classList.contains('PanelHeader--fixed')).toEqual(false);
  });

  it('resolves isFixed if fixed prop is undefined', () => {
    const { container } = render(<PanelHeader />);
    expect((container.firstChild as HTMLElement).classList.contains('PanelHeader--fixed')).toEqual(true);
  });

  it('resolves isFixed if platform is VKCOM', () => {
    const { container, rerender } = render(
      <ConfigProvider platform={Platform.VKCOM}>
        <PanelHeader />
      </ConfigProvider>,
    );

    expect((container.firstChild as HTMLElement).classList.contains('PanelHeader--fixed')).toEqual(false);

    rerender(
      <ConfigProvider platform={Platform.VKCOM}>
        <PanelHeader fixed={true} />
      </ConfigProvider>,
    );

    expect((container.firstChild as HTMLElement).classList.contains('PanelHeader--fixed')).toEqual(true);
  });
});
