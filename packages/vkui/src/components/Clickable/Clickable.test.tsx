import { render } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { Clickable } from './Clickable';

describe('Clickable', () => {
  baselineComponent(Clickable);

  baselineComponent((props) => (
    <Clickable onClick={noop} {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable href="" {...props}>
      content
    </Clickable>
  ));
  baselineComponent((props) => (
    <Clickable onClick={noop} disabled {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable href="" disabled {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable Component="span" {...props}>
      content
    </Clickable>
  ));

  it('href: should be link', () => {
    const result = render(<Clickable href="https://vk.com" />);
    expect(result.getByRole('link')).toBeInTheDocument();
  });

  it('href && disabled: should be link', () => {
    const result = render(<Clickable href="https://vk.com" disabled />);
    expect(result.getByRole('link')).toBeInTheDocument();
  });
});
