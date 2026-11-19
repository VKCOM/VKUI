import * as React from 'react';
import { ScreenSpinner } from './ScreenSpinner';

export const ScreenSpinnerCancelButtonPlayground = () => {
  const [count, setCount] = React.useState(0);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setCount(-100);
      }}
    >
      <ScreenSpinner.Container state="cancelable">
        <ScreenSpinner.SwapIcon
          cancelLabel="Cancel"
          onClick={() => setCount((value) => value + 1)}
        />
      </ScreenSpinner.Container>
      <output data-testid="count">{count}</output>
    </form>
  );
};
