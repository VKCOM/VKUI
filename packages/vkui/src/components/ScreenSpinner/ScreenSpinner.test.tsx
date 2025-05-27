import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ScreenSpinner } from './ScreenSpinner';
import stylesDelay from '../../styles/animationDelayVisibility.module.css';

describe('ScreenSpinner', () => {
  baselineComponent(ScreenSpinner);

  it('should delay visibility', () => {
    render(<ScreenSpinner delayVisibility={200} />);

    expect(document.querySelector(`.${stylesDelay.delayVisibility}`)).not.toBeNull();
  });
});
