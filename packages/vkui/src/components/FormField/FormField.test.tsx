import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { FormField } from './FormField';

describe('FormField', () => {
  baselineComponent(FormField);

  it('should have maxHeight style', () => {
    render(
      <FormField data-testid="field" maxHeight={100}>
        <div></div>
      </FormField>,
    );

    expect(screen.getByTestId('field')).toHaveStyle('max-height: 100px;');
  });
});
