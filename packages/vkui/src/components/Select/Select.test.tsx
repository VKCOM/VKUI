import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Select } from './Select';

describe('Select', () => {
  baselineComponent((props) => (
    <AdaptivityProvider hasPointer>
      <Select aria-label="Select an option" options={[]} {...props} />
    </AdaptivityProvider>
  ));
});
