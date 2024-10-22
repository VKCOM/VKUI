import * as React from 'react';
import { act } from 'react';
import { fireEvent, render, renderHook } from '@testing-library/react';
import { setRef } from '../lib/utils';
import type { HasRootRef } from '../types';
import { usePatchChildren } from './usePatchChildren';

const ComponentWithoutRef = (props: React.DOMAttributes<HTMLDivElement>) => <div {...props}></div>;

const ComponentWithGetRootRef = ({
  getRootRef,
  ...restProps
}: HasRootRef<HTMLDivElement> & React.DOMAttributes<HTMLDivElement>) => (
  <div ref={getRootRef} {...restProps}></div>
);

const ComponentWithForwardRef = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <div ref={ref} {...props}></div>);

type WrapperWithUsePatchChildrenRefProps = {
  childRef?: React.RefObject<HTMLDivElement>;
  refHook?: React.RefObject<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;

const WrapperWithUsePatchChildrenRef = ({
  children,
  childRef: childRefProp,
  refHook,
  ...restProps
}: WrapperWithUsePatchChildrenRefProps) => {
  const [childRef, child] = usePatchChildren<HTMLDivElement>(children, restProps, refHook);

  React.useEffect(() => {
    if (childRef.current && childRefProp) {
      setRef<HTMLDivElement>(childRef.current, childRefProp);
    }
  }, [childRef, childRefProp]);

  return <div data-testid="child">{child}</div>;
};

describe(usePatchChildren, () => {
  it('returns undefined when no props', () => {
    const { result } = renderHook(() => usePatchChildren());
    const [childRef, child] = result.current;
    act(() => {
      expect(childRef.current).toBeNull();
      expect(child).toBeUndefined();
    });
  });

  it('returns error if children is not expected', () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();

    render(
      <WrapperWithUsePatchChildrenRef>
        <ComponentWithoutRef />
      </WrapperWithUsePatchChildrenRef>,
    );

    expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    expect(consoleErrorMock.mock.calls[0][0]).toBe(
      'Warning: React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.%s',
    );
  });

  it.each([
    { type: 'element', refPropKey: 'childRef' },
    { type: 'element', refPropKey: 'refHook' },
    { type: 'component', refPropKey: 'childRef' },
    { type: 'component', refPropKey: 'refHook' },
    { type: 'forwardRef', refPropKey: 'refHook' },
    { type: 'forwardRef', refPropKey: 'childRef' },
  ])('should get ref by $type with $refPropKey', ({ type, refPropKey }) => {
    const refByTestingHook = React.createRef<HTMLDivElement>();
    const refForCompare = React.createRef<HTMLDivElement>();

    let reactElement: React.ReactNode = null;
    switch (type) {
      case 'element':
        reactElement = <div ref={refForCompare} />;
        break;
      case 'component':
        reactElement = <ComponentWithGetRootRef getRootRef={refForCompare} />;
        break;
      case 'forwardRef':
        reactElement = <ComponentWithForwardRef ref={refForCompare} />;
        break;
    }

    const result = render(
      <WrapperWithUsePatchChildrenRef {...{ [refPropKey]: refByTestingHook }}>
        {reactElement}
      </WrapperWithUsePatchChildrenRef>,
    );

    act(() => {
      expect(refByTestingHook).toEqual(refForCompare);
    });

    expect(result.getByTestId('child')).not.toBeEmptyDOMElement();
  });

  it.each([
    { type: 'element', event: 'onMouseEnter', hasOwnEvent: false },
    { type: 'element', event: 'onMouseEnter', hasOwnEvent: true },
    { type: 'component', event: 'onMouseEnter', hasOwnEvent: false },
    { type: 'component', event: 'onMouseEnter', hasOwnEvent: true },
  ])(
    'should inject $event event to $type (hasOwnEvent: $hasOwnEvent)',
    ({ type, event, hasOwnEvent }) => {
      jest.spyOn(global.console, 'error').mockImplementationOnce((message) => {
        if (message.includes('React does not recognize the')) {
          return;
        }
        global.console.error(message);
      });
      const reactElementRef = React.createRef<HTMLDivElement>();
      const ownEvent = {
        someIntValue: 1,
        someBoolValue: false,
        onMouseEnter: jest.fn(),
        onMouseLeave: jest.fn(),
      };

      let reactElement: React.ReactNode = null;
      switch (type) {
        case 'element': {
          const props = hasOwnEvent ? ownEvent : {};
          reactElement = <div ref={reactElementRef} {...props} />;
          break;
        }
        case 'component': {
          const props = hasOwnEvent ? ownEvent : {};
          reactElement = <ComponentWithGetRootRef getRootRef={reactElementRef} {...props} />;
          break;
        }
      }

      const injectedEvents = {
        [event]: jest.fn(),
        onClick: jest.fn(),
      };

      render(
        <WrapperWithUsePatchChildrenRef {...injectedEvents}>
          {reactElement}
        </WrapperWithUsePatchChildrenRef>,
      );

      act(() => {
        fireEvent.mouseEnter(reactElementRef.current!);
        fireEvent.click(reactElementRef.current!);
      });

      expect(ownEvent.someIntValue).toBe(1);
      expect(ownEvent.someBoolValue).toBeFalsy();
      expect(ownEvent.onMouseEnter).toHaveBeenCalledTimes(hasOwnEvent ? 1 : 0);
      expect(ownEvent.onMouseLeave).toHaveBeenCalledTimes(0);
      expect(injectedEvents.onMouseEnter).toHaveBeenCalledTimes(1);
      expect(injectedEvents.onClick).toHaveBeenCalledTimes(1);
    },
  );

  it.each([{ type: 'fragment' }, { type: 'array' }])(
    'should ignore invalid like $type',
    ({ type }) => {
      const refByTestingHook = React.createRef<HTMLDivElement>();

      let reactElement: React.ReactNode = null;
      switch (type) {
        case 'fragment': {
          reactElement = <React.Fragment>Fragment</React.Fragment>;
          break;
        }
        case 'array': {
          reactElement = [<div key="1" />, <div key="2" />];
          break;
        }
      }

      const result = render(
        <WrapperWithUsePatchChildrenRef childRef={refByTestingHook}>
          {reactElement}
        </WrapperWithUsePatchChildrenRef>,
      );

      act(() => {
        expect(refByTestingHook.current).toBeNull();
      });

      expect(result.getByTestId('child')).not.toBeEmptyDOMElement();
    },
  );
});
