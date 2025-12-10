import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ScreenSpinner } from './ScreenSpinner';
import stylesDelay from '../../styles/animationVisibilityDelay.module.css';

describe('ScreenSpinner', () => {
  baselineComponent(ScreenSpinner);

  it('should delay visibility', () => {
    render(<ScreenSpinner visibilityDelay={200} />);

    expect(document.querySelector(`.${stylesDelay.visibilityDelay}`)).not.toBeNull();
  });
});
