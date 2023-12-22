import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomSelectDropdown } from './CustomSelectDropdown';
import styles from './CustomSelectDropdown.module.css';

describe('CustomSelectDropdown', () => {
  it('Displays only spinner if fetching: true', () => {
    render(
      <CustomSelectDropdown targetRef={React.createRef()} scrollBoxRef={React.createRef()} fetching>
        <div data-testid="test-content">test</div>
      </CustomSelectDropdown>,
    );
    expect(document.querySelector('.' + styles.fetching)).not.toBeNull();
  });

  it('Displays children if fetching: false', () => {
    render(
      <CustomSelectDropdown targetRef={React.createRef()} scrollBoxRef={React.createRef()}>
        <div data-testid="test-content">test</div>
      </CustomSelectDropdown>,
    );
    expect(screen.getByTestId('test-content')).not.toBeNull();
  });
});
