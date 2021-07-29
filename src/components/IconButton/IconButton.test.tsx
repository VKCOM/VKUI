import { baselineComponent } from '../../testing/utils';
import IconButton, { IconButtonProps } from './IconButton';
import { render, screen } from '@testing-library/react';
import { Icon28VoiceOutline } from '@vkontakte/icons';

const IconButtonTest = (props: IconButtonProps) => (
  <IconButton data-testid="button" aria-label="Тестовая кнопка" {...props}>
    <Icon28VoiceOutline />
  </IconButton>
);
const button = () => screen.getByTestId('button');

describe('IconButton', () => {
  baselineComponent(IconButton);

  it('Component: default IconButton is a button', () => {
    render(<IconButtonTest />);
    expect(screen.getByRole('button')).toBe(button());
  });

  it('Component: IconButton w/ href is a link', () => {
    render(<IconButtonTest href="https://vk.com" />);
    expect(screen.getByRole('link')).toBe(button());
  });

  it('Component: IconButton w/ Component and href is [Component]', () => {
    render(<IconButtonTest href="https://vk.com" Component="div" role="link" />);
    expect(button().tagName.toLowerCase()).toMatch('div');
  });
});
