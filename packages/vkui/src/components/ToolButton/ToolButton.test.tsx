import { render, screen } from '@testing-library/react';
import { Icon20Add, Icon24Add } from '@vkontakte/icons';
import { baselineComponent } from '../../testing/utils';
import { ToolButton, type ToolButtonProps } from './ToolButton';

const ToolButtonTest = (props: Omit<ToolButtonProps, 'IconCompact' | 'IconRegular'>) => (
  <ToolButton data-testid="custom-btn" IconCompact={Icon20Add} IconRegular={Icon24Add} {...props} />
);
const button = () => screen.getByTestId('custom-btn');

describe('ToolButton', () => {
  baselineComponent((props) => <ToolButtonTest {...props}>ToolButton</ToolButtonTest>);

  it('Component: ToolButton is handled as a native button', () => {
    render(<ToolButtonTest>Native ToolButton</ToolButtonTest>);
    expect(button().tagName.toLowerCase()).toMatch('button');
  });

  it('Component: ToolButton with valid href is handled as a native link', () => {
    render(<ToolButtonTest href="#">Native Link</ToolButtonTest>);
    expect(button().tagName.toLowerCase()).toMatch('a');
  });
});
