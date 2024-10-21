import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { PanelHeader, type PanelHeaderProps } from './PanelHeader';
import styles from './PanelHeader.module.css';

const PanelHeaderTest = (props: PanelHeaderProps) => (
  <PanelHeader data-testid="header" {...props} />
);
const panelHeader = () => screen.getByTestId('header');

describe('PanelHeader', () => {
  baselineComponent(PanelHeader);

  it('resolves isFixed if fixed prop if it is passed', () => {
    const { rerender } = render(<PanelHeaderTest fixed />);
    expect(panelHeader()).toHaveClass(styles.hasFixed);
    rerender(<PanelHeaderTest fixed={false} />);
    expect(panelHeader()).not.toHaveClass(styles.hasFixed);
  });

  it('resolves isFixed if fixed prop is undefined', () => {
    render(<PanelHeaderTest />);
    expect(panelHeader()).toHaveClass(styles.hasFixed);
  });

  it('resolves isFixed if platform is VKCOM', () => {
    const { rerender } = render(
      <ConfigProvider platform="vkcom">
        <PanelHeaderTest />
      </ConfigProvider>,
    );

    expect(panelHeader()).not.toHaveClass(styles.hasFixed);

    rerender(
      <ConfigProvider platform="vkcom">
        <PanelHeaderTest fixed={true} />
      </ConfigProvider>,
    );

    expect(panelHeader()).toHaveClass(styles.hasFixed);
  });
});
