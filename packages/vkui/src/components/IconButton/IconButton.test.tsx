import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon28VoiceOutline } from '@vkontakte/icons';
import { baselineComponent } from '../../testing/utils';
import { IconButton, IconButtonProps } from './IconButton';

const IconButtonTest = (props: IconButtonProps) => (
  <IconButton data-testid="button" label="Тестовая кнопка" {...props}>
    <Icon28VoiceOutline />
  </IconButton>
);
const button = () => screen.getByTestId('button');

describe('IconButton', () => {
  baselineComponent((props) => <IconButton {...props} label="IconButton" />);

  it('Component: default IconButton is a button', () => {
    render(<IconButtonTest />);
    expect(button().tagName.toLowerCase()).toMatch('button');
  });

  it('Component: IconButton w/ href is a link', () => {
    render(<IconButtonTest href="https://vk.com" />);
    expect(button().tagName.toLowerCase()).toMatch('a');
  });
});
