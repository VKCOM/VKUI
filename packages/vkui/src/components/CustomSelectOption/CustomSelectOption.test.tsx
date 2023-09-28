import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { CustomSelectOption } from './CustomSelectOption';

describe('CustomSelectOption', () => {
  baselineComponent(
    (props) => <CustomSelectOption {...props}>CustomSelectOption</CustomSelectOption>,
    {
      // TODO [a11y]: "Certain ARIA roles must be contained by particular parents (aria-required-parent)"
      //              https://dequeuniversity.com/rules/axe/4.5/aria-required-parent?application=axeAPI
      a11y: false,
    },
  );

  it('does not handle onClick when disabled', () => {
    const onClick = jest.fn();

    const { rerender } = render(
      <CustomSelectOption onClick={onClick}>Дмитрий Безуглый</CustomSelectOption>,
    );

    fireEvent.click(screen.getByText('Дмитрий Безуглый'));
    expect(onClick).toHaveBeenCalledTimes(1);

    rerender(
      <CustomSelectOption disabled onClick={onClick}>
        Дмитрий Безуглый
      </CustomSelectOption>,
    );

    fireEvent.click(screen.getByText('Дмитрий Безуглый'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
