/**
 * jest-runners-groups
 * @group unit
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { PanelHeaderButton, PanelHeaderButtonProps } from './PanelHeaderButton';

const PanelHeaderButtonTest = (props: PanelHeaderButtonProps) => (
  <PanelHeaderButton data-testid="button" {...props} />
);
const button = () => screen.getByTestId('button');

describe('PanelHeaderButton', () => {
  baselineComponent(PanelHeaderButton);

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
