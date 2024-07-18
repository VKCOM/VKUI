import * as React from 'react';
import { render } from '@testing-library/react';
import {
  AppRootContext,
  DEFAULT_APP_ROOT_CONTEXT_VALUE,
} from '../components/AppRoot/AppRootContext';
import { createSignal } from '../lib/signal';
import { useHandleOpenModals } from './useHandleOpenModals';

describe(useHandleOpenModals, () => {
  it('check callback called when signal was dispatched', () => {
    const openModalsSignal = createSignal();
    const onOpenModals = jest.fn();
    const Fixture = () => {
      useHandleOpenModals(onOpenModals);
      return <></>;
    };

    render(
      <AppRootContext.Provider value={{ ...DEFAULT_APP_ROOT_CONTEXT_VALUE, openModalsSignal }}>
        <Fixture />
      </AppRootContext.Provider>,
    );

    React.act(() => openModalsSignal.dispatch());

    expect(onOpenModals).toBeCalledTimes(1);
  });
});
