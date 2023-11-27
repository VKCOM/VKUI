import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { createWrapper } from '../../testing/createWrapper';
import { Panel } from '../Panel/Panel';
import { View } from '../View/View';
import { useNavId } from './useNavId';

describe(useNavId, () => {
  it('Panel with id', () => {
    const { result } = renderHook(useNavId, {
      wrapper: createWrapper(Panel, { id: 'test' }),
    });
    expect(result.current.panel).toEqual('test');
  });

  it('Panel with nav', () => {
    const { result } = renderHook(useNavId, {
      wrapper: createWrapper(Panel, { nav: 'test' }),
    });
    expect(result.current.panel).toEqual('test');
  });

  it('View with id', () => {
    const { result } = renderHook(useNavId, {
      wrapper: (props) => (
        <View activePanel="panel" id="test">
          <Panel id="panel" {...props} />
        </View>
      ),
    });
    expect(result.current.view).toEqual('test');
    expect(result.current.panel).toEqual('panel');
  });

  it('View with nav', () => {
    const { result } = renderHook(useNavId, {
      wrapper: (props) => (
        <View activePanel="panel" nav="test">
          <Panel id="panel" {...props} />
        </View>
      ),
    });
    expect(result.current.view).toEqual('test');
    expect(result.current.panel).toEqual('panel');
  });
});
