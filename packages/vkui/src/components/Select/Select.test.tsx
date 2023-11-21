import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Select } from './Select';

describe('Select', () => {
  baselineComponent((props) => (
    <AdaptivityProvider hasPointer>
      <label htmlFor="select-id">Select an option</label>
      <Select id="select-id" options={[]} {...props} />
    </AdaptivityProvider>
  ));
});
