import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { CustomSelectDropdown } from './CustomSelectDropdown';

describe('CustomSelectDropdown', () => {
  it('Displays only spinner if fetching: true', () => {
    render(
      <CustomSelectDropdown targetRef={createRef()} scrollBoxRef={createRef()} fetching>
        <div data-testid="test-content">test</div>
      </CustomSelectDropdown>,
    );
    expect(document.querySelector('.vkuiCustomSelectDropdown__fetching')).not.toBeNull();
  });

  it('Displays children if fetching: false', () => {
    render(
      <CustomSelectDropdown targetRef={createRef()} scrollBoxRef={createRef()}>
        <div data-testid="test-content">test</div>
      </CustomSelectDropdown>,
    );
    expect(screen.getByTestId('test-content')).not.toBeNull();
  });
});
