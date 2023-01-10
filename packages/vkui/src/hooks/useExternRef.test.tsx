import { render } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import * as React from 'react';
import { HasRef } from '../types';
import { useExternRef } from './useExternRef';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

const RefForwarder = (props: HasRef<HTMLDivElement>) => <div ref={useExternRef(props.getRef)} />;
describe(useExternRef, () => {
  describe('manages inner ref', () => {
    it('ensures ref exists', () => {
      const OuterRef = () => {
        expect(useExternRef()).toBeTruthy();
        return null;
      };
      render(<OuterRef />);
    });
    it('keeps inner ref.current up-to-date', () => {
      let firstRef: React.MutableRefObject<any> | undefined = undefined;
      let counter = 0;
      const RefForwarder = (props: HasRef<any>) => {
        const ref = useExternRef(props.getRef);
        firstRef = firstRef || ref;
        counter += 1;
        ref.current = counter;
        return null;
      };
      render(<RefForwarder getRef={() => null} />).rerender(<RefForwarder getRef={() => null} />);
      expect((firstRef as any)?.current).toBe(counter);
    });
  });
  describe('sets outer ref to null', () => {
    it('on wrapper unmount', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<RefForwarder getRef={ref} />).unmount();
      expect(ref.current).toBeNull();
    });
    it('on inner node unmount', () => {
      const ref = React.createRef();
      const RefForwarder = (props: HasRef<any> & { hide?: boolean }) => {
        const ref = useExternRef(props.getRef);
        return props.hide ? null : <div ref={ref} />;
      };
      render(<RefForwarder getRef={ref} />).rerender(<RefForwarder getRef={ref} hide />);
      expect(ref.current).toBeNull();
    });
  });
  describe('calls outer ref', () => {
    it('before useLayoutEffect', () => {
      const RefUser = () => {
        const ref = React.useRef(null);
        useIsomorphicLayoutEffect(() => {
          expect(ref.current).toBeInTheDocument();
        }, []);
        return <RefForwarder getRef={ref} />;
      };
      render(<RefUser />);
    });
    it('when node changes', () => {
      const ref = React.createRef();
      const RefForwarder = (props: HasRef<any> & { remountKey?: any }) => (
        <div key={props.remountKey} ref={useExternRef(props.getRef)} />
      );
      render(<RefForwarder getRef={ref} />).rerender(
        <RefForwarder getRef={ref} remountKey="123" />,
      );
      expect(ref.current).toBeInTheDocument();
    });
    it('when ref identity changes', () => {
      const secondRef = jest.fn();
      render(<RefForwarder getRef={noop} />).rerender(<RefForwarder getRef={secondRef} />);
      expect(secondRef).toHaveBeenCalled();
    });
    it('once per identity', () => {
      const ref = jest.fn();
      render(<RefForwarder getRef={ref} />).rerender(<RefForwarder getRef={ref} />);
      expect(ref).toHaveBeenCalledTimes(1);
    });
  });
});
