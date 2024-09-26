import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { UnstyledTextField } from './UnstyledTextField';
import styles from './UnstyledTextField.module.css';

describe(UnstyledTextField, () => {
  baselineComponent(
    (props) => (
      <>
        <VisuallyHidden Component="label" id="input">
          Input
        </VisuallyHidden>
        <UnstyledTextField as="input" aria-labelledby="input" {...props} />
      </>
    ),
    undefined,
    'baseline (as="input")',
  );

  baselineComponent(
    (props) => (
      <>
        <VisuallyHidden Component="label" id="textarea">
          Textarea
        </VisuallyHidden>
        <UnstyledTextField as="textarea" aria-labelledby="textarea" {...props} />
      </>
    ),
    undefined,
    'baseline (as="textarea")',
  );

  it('accepts noPadding prop', () => {
    const result = render(<UnstyledTextField as="input" data-testid="test" noPadding />);
    expect(result.getByTestId('test')).toHaveClass(styles.noPadding);
  });
});
