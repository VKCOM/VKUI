import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { baselineComponent } from '../../../testing/utils';
import { Footnote } from '../Footnote/Footnote';
import { Text } from './Text';

describe('Text', () => {
  baselineComponent((props) => <Text {...props}>Text</Text>);

  it('renders with a function Component', () => {
    render(<Text Component={Footnote}>Text</Text>);

    expect(screen.getByText('Text').tagName).toBe('SPAN');
  });
});
