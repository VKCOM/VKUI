import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { SelectConditionalRender } from './SelectConditionalRender';

describe.each([true, false])(`${SelectConditionalRender.name} with hasPointer %s`, (hasPointer) => {
  baselineComponent((props) => (
    <AdaptivityProvider hasPointer={hasPointer}>
      <label htmlFor="select-id">Select an option</label>
      <SelectConditionalRender
        id="select-id"
        options={[{ value: 'value', label: <div>Label</div> }]}
        {...props}
      />
    </AdaptivityProvider>
  ));
});
