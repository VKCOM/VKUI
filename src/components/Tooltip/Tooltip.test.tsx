import React, { HtmlHTMLAttributes } from 'react';
import { baselineComponent } from '../../testing/utils';
import { render, screen } from '@testing-library/react';
import Tooltip from './Tooltip';
import View from '../View/View';
import Panel from '../Panel/Panel';
import { HasRootRef } from '../../types';

const Wrapper = ({ children }: any) => (
  <View activePanel="pan">
    <Panel id="pan">
      {children}
    </Panel>
  </View>
);

describe('Tooltip', () => {
  baselineComponent((props) => (
    <Wrapper>
      <Tooltip isShown {...props}><div /></Tooltip>
    </Wrapper>
  ), {
    forward: false,
  });

  describe('preserves child ref', () => {
    it('on DOM child', () => {
      const ref = jest.fn();
      render((
        <Wrapper>
          <Tooltip><div ref={ref} data-testid="xxx" /></Tooltip>
        </Wrapper>
      ));
      expect(ref).toHaveBeenCalledWith(screen.getByTestId('xxx'));
    });
    it('on VKUI child', () => {
      const RefNode = ({ getRootRef, ...props }: HasRootRef<HTMLDivElement> & HtmlHTMLAttributes<HTMLDivElement>) => (
        <div ref={getRootRef} {...props} />
      );
      const ref = jest.fn();
      render((
        <Wrapper>
          <Tooltip><RefNode getRootRef={ref} data-testid="xxx" /></Tooltip>
        </Wrapper>
      ));
      expect(ref).toHaveBeenCalledWith(screen.getByTestId('xxx'));
    });
  });
});
