import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppRoot } from '../components/AppRoot/AppRoot';
import { Button } from '../components/Button/Button';

const AppRootTest = () => <AppRoot data-testid="root" mode="embedded"><Button>Hello world</Button></AppRoot>;
const root = () => screen.getByTestId('root');
const btn = () => screen.getByRole('button');
const keyboardClass = 'AppRoot--keyboard-input';

describe('useKeyboardInputTracker()', () => {
  describe('Manages a11y via AppRoot', () => {
    it(`has no .${keyboardClass} by default`, () => {
      render(<AppRootTest />);

      expect(root()).not.toHaveClass(keyboardClass);
    });
    it(`has .${keyboardClass} on keyboard navigation`, () => {
      render(<AppRootTest />);

      userEvent.tab();

      expect(btn()).toHaveFocus();
      expect(root()).toHaveClass(keyboardClass);
    });
    it(`keeps .${keyboardClass} on typing keys other than TAB`, () => {
      render(<AppRootTest />);

      userEvent.tab();
      userEvent.keyboard('{esc}');

      expect(root()).toHaveClass(keyboardClass);
    });
    it(`has no .${keyboardClass} on mouse click`, () => {
      render(<AppRootTest />);

      userEvent.click(btn());

      expect(root()).not.toHaveClass(keyboardClass);
    });
    it(`manages .${keyboardClass} on multiple events`, () => {
      render(<AppRootTest />);

      userEvent.tab();

      expect(root()).toHaveClass(keyboardClass);

      userEvent.click(btn());

      expect(root()).not.toHaveClass(keyboardClass);
    });
  });
});
