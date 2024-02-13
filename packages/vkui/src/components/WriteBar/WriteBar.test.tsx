import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, fakeTimers, userEvent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { WriteBar, WriteBarProps } from './WriteBar';

const getInput = () => screen.getByRole('textbox');

describe('WriteBar', () => {
  baselineComponent((props: WriteBarProps) => (
    <>
      <VisuallyHidden id="writebar" Component="label">
        WriteBar
      </VisuallyHidden>
      <WriteBar aria-labelledby="writebar" {...props} />
    </>
  ));

  describe('works uncontrolled', () => {
    fakeTimers();
    it('form reset form', async () => {
      render(
        <form data-testid="form">
          <WriteBar />
        </form>,
      );
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
      screen.getByTestId<HTMLFormElement>('form').reset();
      expect(getInput()).toHaveValue('');
    });
    it('form reset with defaultValue', async () => {
      render(
        <form data-testid="form">
          <WriteBar defaultValue="def" />
        </form>,
      );
      expect(getInput()).toHaveValue('def');
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('defuser');
      screen.getByTestId<HTMLFormElement>('form').reset();
      expect(getInput()).toHaveValue('def');
    });
  });
});
