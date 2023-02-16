import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Link, LinkProps } from './Link';

const LinkTest = (props: LinkProps) => (
  <Link data-testid="link" {...props}>
    Link
  </Link>
);
const link = () => screen.getByTestId('link');

describe('Link', () => {
  baselineComponent(Link);

  it('Component: default Link is a button', () => {
    render(<LinkTest />);
    expect(link().tagName.toLowerCase()).toMatch('button');
  });

  it('Component: Link w/ href is a link', () => {
    render(<LinkTest href="https://vk.com" />);
    expect(link().tagName.toLowerCase()).toMatch('a');
  });

  it('Component: Link w/ Component and href is [Component]', () => {
    render(<LinkTest href="https://vk.com" Component="div" />);
    expect(link().tagName.toLowerCase()).toMatch('div');
  });
});
