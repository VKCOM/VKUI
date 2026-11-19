import { ScreenSpinner } from '../../../src';
import { ElementScrollController } from '../../../src/components/AppRoot/ScrollContext';

export const ScreenSpinnerPreview = () => {
  return (
    <ElementScrollController elRef={{ current: null }}>
      <ScreenSpinner />
    </ElementScrollController>
  );
};
