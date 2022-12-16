import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { PanelHeaderButton, PanelHeaderButtonProps } from './PanelHeaderButton';
import { render, screen } from '@testing-library/react';

const PanelHeaderButtonTest = (props: PanelHeaderButtonProps) => (
  <PanelHeaderButton data-testid="button" {...props} />
);
const button = () => screen.getByTestId('button');

describe('PanelHeaderButton', () => {
  /*
   * a11y: Buttons must have discernible text (button-name)
   *       мы не можем задать компоненту дефолтный aria-label,
   *       поэтому фиксим тест тем, что передаем его сами
   */
  baselineComponent((p) => <PanelHeaderButton {...p}>Кнопка</PanelHeaderButton>);

  it('Component: default PanelHeaderButton is a button', () => {
    render(<PanelHeaderButtonTest />);
    expect(button().tagName.toLowerCase()).toMatch('button');
  });

  it('Component: PanelHeaderButton w/ href is a link', () => {
    render(<PanelHeaderButtonTest href="https://vk.com" />);
    expect(button().tagName.toLowerCase()).toMatch('a');
  });

  it('Component: PanelHeaderButton does not react to passed Component', () => {
    render(<PanelHeaderButtonTest href="https://vk.com" Component="div" />);
    expect(button().tagName.toLowerCase()).toMatch('a');
  });
});
