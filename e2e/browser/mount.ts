import { ReactElement } from 'react';
import { currentPath } from './jest-mock';
import { testHandle } from './test-handle';

export function mount(jsx: ReactElement) {
  testHandle.register(currentPath(), jsx);
}

export const screenshot = mount;
