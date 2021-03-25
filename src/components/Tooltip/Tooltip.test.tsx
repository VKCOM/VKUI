import { HtmlHTMLAttributes } from 'react';
import { baselineComponent } from '../../testing/utils';
import { render, screen } from '@testing-library/react';
import Tooltip from './Tooltip';
import { HasRootRef } from '../../types';
import { TooltipContainer } from './TooltipContainer';

describe('Tooltip', () => {
  baselineComponent((props) => (
    <TooltipContainer>
      <Tooltip isShown {...props}><div /></Tooltip>
    </TooltipContainer>
  ), {
    forward: false,
  });

  describe('preserves child ref', () => {
    it('on DOM child', () => {
      const ref = jest.fn();
      render((
        <TooltipContainer>
          <Tooltip><div ref={ref} data-testid="xxx" /></Tooltip>
        </TooltipContainer>
      ));
      expect(ref).toHaveBeenCalledWith(screen.getByTestId('xxx'));
    });
    it('on VKUI child', () => {
      const RefNode = ({ getRootRef, ...props }: HasRootRef<HTMLDivElement> & HtmlHTMLAttributes<HTMLDivElement>) => (
        <div ref={getRootRef} {...props} />
      );
      const ref = jest.fn();
      render((
        <TooltipContainer>
          <Tooltip><RefNode getRootRef={ref} data-testid="xxx" /></Tooltip>
        </TooltipContainer>
      ));
      expect(ref).toHaveBeenCalledWith(screen.getByTestId('xxx'));
    });
  });
});
