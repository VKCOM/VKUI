import { Checkbox } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <Checkbox
        checked
        aria-label="checkbox"
        data-testid="checkbox"
        required
        description="description"
        indeterminate
        hasHover={false}
        onClick={() => {}}
        onChange={() => {}}
        onFocus={() => {}}
        getRef={inputRef}
      />
      <Checkbox
        checked
        aria-label="checkbox"
        data-testid="checkbox"
        required
        description="description"
        indeterminate
        hasHover={false}
        onChange={() => {}}
        onClick={() => {}}
        onFocus={() => {}}
        getRef={inputRef}
      >
        Checkbox
      </Checkbox>
      <Checkbox.Input
        checked
        aria-label="checkbox"
        data-testid="checkbox"
        required
        onClick={() => {}}
        onChange={() => {}}
        onFocus={() => {}}
        getRef={inputRef}
      />
    </React.Fragment>
  );
};
