import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { PanelHeaderButton, PanelHeaderButtonProps } from './PanelHeaderButton';

const PanelHeaderButtonTest = (props: PanelHeaderButtonProps) => (
  <PanelHeaderButton data-testid="button" {...props} />
);
const button = () => screen.getByTestId('button');

describe('PanelHeaderButton', () => {
  baselineComponent((props) => <PanelHeaderButton {...props}>PanelHeaderButton</PanelHeaderButton>);

  it('Component: default PanelHeaderButton is a button', () => {
    render(<PanelHeaderButtonTest />);
    expect(button().tagName.toLowerCase()).toMatch('button');
  });

  it('Component: PanelHeaderButton w/ href is a link', () => {
    render(<PanelHeaderButtonTest href="https://vk.com" />);
    expect(button().tagName.toLowerCase()).toMatch('a');
  });
});
