import { createRef, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { baselineComponent } from '../../testing/utils';
import { RootComponent } from './RootComponent';

describe('RootComponent', () => {
  baselineComponent(RootComponent);

  describe('render prop', () => {
    it('does not overwrite an explicit ref with spread render props', () => {
      const localRef = createRef<HTMLDivElement>();
      render(
        <RootComponent<HTMLDivElement>
          render={({ getRootRef, ...props }) => (
            <div ref={localRef} {...props} data-testid="rendered" />
          )}
        />,
      );

      expect(localRef.current).toBe(screen.getByTestId('rendered'));
    });

    baselineComponent(
      (props) => (
        <RootComponent<HTMLDivElement>
          {...props}
          render={({ getRootRef, ...rootProps }) => <div ref={getRootRef} {...rootProps} />}
        />
      ),
      {},
      'baseline with render',
    );

    it('uses render instead of Component', () => {
      render(
        <RootComponent<HTMLSpanElement>
          Component="div"
          render={({ getRootRef, ...props }) => <span data-testid="rendered" {...props} />}
        />,
      );

      const node = screen.getByTestId('rendered');
      expect(node.tagName).toBe('SPAN');
    });

    it('passes resolved className and style to render', () => {
      render(
        <RootComponent<HTMLDivElement>
          className="customClassName"
          baseClassName="baseClassName"
          style={{ color: 'red' }}
          baseStyle={{ backgroundColor: 'blue' }}
          render={({ getRootRef, ...props }) => <div data-testid="rendered" {...props} />}
        />,
      );

      const node = screen.getByTestId('rendered');
      expect(node.classList.contains('customClassName')).toBe(true);
      expect(node.classList.contains('baseClassName')).toBe(true);
      expect(node.style.color).toBe('red');
      expect(node.style.backgroundColor).toBe('blue');
    });

    it('passes rest props to render', () => {
      render(
        <RootComponent<HTMLDivElement>
          id="custom-id"
          aria-label="label"
          render={({ getRootRef, ...props }) => <div data-testid="rendered" {...props} />}
        />,
      );

      const node = screen.getByTestId('rendered');
      expect(node.id).toBe('custom-id');
      expect(node.getAttribute('aria-label')).toBe('label');
    });

    it('forwards getRootRef through render', () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <RootComponent<HTMLDivElement>
          getRootRef={ref}
          render={({ getRootRef, ...props }) => (
            <div data-testid="rendered" ref={getRootRef} {...props} />
          )}
        />,
      );

      expect(ref.current).toBe(screen.getByTestId('rendered'));
    });

    it('keeps render subtree mounted on rerender with inline render', () => {
      const mount = vi.fn();
      const unmount = vi.fn();

      const Child = () => {
        useEffect(() => {
          mount();
          return unmount;
        }, []);

        return null;
      };

      const { rerender, unmount: unmountRoot } = render(
        <RootComponent<HTMLDivElement>
          render={({ getRootRef, ...props }) => (
            <div ref={getRootRef} {...props}>
              <Child />
            </div>
          )}
        />,
      );

      expect(mount).toHaveBeenCalledTimes(1);
      expect(unmount).not.toHaveBeenCalled();

      rerender(
        <RootComponent<HTMLDivElement>
          render={({ getRootRef, ...props }) => (
            <div ref={getRootRef} {...props}>
              <Child />
            </div>
          )}
        />,
      );

      expect(mount).toHaveBeenCalledTimes(1);
      expect(unmount).not.toHaveBeenCalled();

      unmountRoot();
      expect(unmount).toHaveBeenCalledTimes(1);
    });

    it('remounts subtree on rerender with inline Component', () => {
      const mount = vi.fn();
      const unmount = vi.fn();

      const Child = () => {
        useEffect(() => {
          mount();
          return unmount;
        }, []);

        return null;
      };

      const { rerender } = render(
        <RootComponent<HTMLDivElement>
          Component={(props) => (
            <div {...props}>
              <Child />
            </div>
          )}
        />,
      );

      expect(mount).toHaveBeenCalledTimes(1);
      expect(unmount).not.toHaveBeenCalled();

      rerender(
        <RootComponent<HTMLDivElement>
          Component={(props) => (
            <div {...props}>
              <Child />
            </div>
          )}
        />,
      );

      expect(mount).toHaveBeenCalledTimes(2);
      expect(unmount).toHaveBeenCalledTimes(1);
    });
  });
});
