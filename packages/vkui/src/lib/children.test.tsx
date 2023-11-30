// partially copied from react-children-utilities
// @see https://github.com/fernandopasik/react-children-utilities/tree/main

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { childToString, getTextFromChildren } from './children';

const OnlyText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div data-testid="onlytext">{getTextFromChildren(children)}</div>
);

describe('children utils', () => {
  describe('childToString', () => {
    it('string', () => {
      expect(childToString('a')).toBe('a');
    });

    it('number', () => {
      expect(childToString(1)).toBe('1');
    });

    it('boolean', () => {
      expect(childToString(true)).toBe('');
    });

    it('{}', () => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      expect(childToString({} as React.ReactNode)).toBe('');
    });

    it('null', () => {
      expect(childToString(null)).toBe('');
    });

    it('undefined', () => {
      expect(childToString()).toBe('');
    });
  });

  describe('getTextFromChildren', () => {
    it('on nested elements', () => {
      render(
        <OnlyText>
          <span>0</span>
          <b>1</b>
          <span>
            <i>2</i>
          </span>
          <i>3</i>
        </OnlyText>,
      );

      expect(screen.getByTestId('onlytext')).toHaveTextContent('0123');
    });

    it('on non nested elements', () => {
      render(
        <OnlyText>
          <span>0</span>
          <b>1</b>
        </OnlyText>,
      );

      expect(screen.getByTestId('onlytext')).toHaveTextContent('01');
    });

    it('on empty', () => {
      render(<OnlyText />);

      expect(screen.getByTestId('onlytext')).toBeEmptyDOMElement();
    });

    it('on empty child', () => {
      render(
        <OnlyText>
          <span />
        </OnlyText>,
      );

      expect(screen.getByTestId('onlytext')).toBeEmptyDOMElement();
    });

    it('on text', () => {
      render(<OnlyText>test 1 test 2</OnlyText>);

      expect(screen.getByTestId('onlytext')).toHaveTextContent('test 1 test 2');
    });

    it('on number', () => {
      render(
        <OnlyText>
          {1}
          {2}
        </OnlyText>,
      );

      expect(screen.getByTestId('onlytext')).toHaveTextContent('12');
    });

    it('on true', () => {
      render(<OnlyText>{true}</OnlyText>);

      expect(screen.getByTestId('onlytext')).toBeEmptyDOMElement();
    });

    it('on false', () => {
      render(<OnlyText>{false}</OnlyText>);

      expect(screen.getByTestId('onlytext')).toBeEmptyDOMElement();
    });

    it('on null', () => {
      render(<OnlyText>{null}</OnlyText>);

      expect(screen.getByTestId('onlytext')).toBeEmptyDOMElement();
    });

    it('on combined types', () => {
      render(
        <OnlyText>
          example
          {null}
          {3}
          {true}
          {false}
          <i>b</i>
        </OnlyText>,
      );

      expect(screen.getByTestId('onlytext')).toHaveTextContent('example3b');
    });
  });
});
