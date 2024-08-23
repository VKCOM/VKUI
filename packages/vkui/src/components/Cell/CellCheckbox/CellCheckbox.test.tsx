import { render } from '@testing-library/react';
import { Platform } from '../../../lib/platform';
import { baselineComponent } from '../../../testing/utils';
import { ConfigProvider } from '../../ConfigProvider/ConfigProvider';
import { CellCheckbox, type CellCheckboxProps } from './CellCheckbox';
import styles from './CellCheckbox.module.css';

describe('CellCheckbox', () => {
  baselineComponent((props) => (
    <label>
      CellCheckbox <CellCheckbox {...props} />
    </label>
  ));

  describe.each([Platform.IOS, Platform.VKCOM])(
    'should use circle icon in platform %s',
    (platform) => {
      it.each<CellCheckboxProps['type']>(['auto', 'circle'])('with type %s ', (type) => {
        const { container } = render(
          <ConfigProvider platform={platform}>
            <CellCheckbox type={type} />
          </ConfigProvider>,
        );
        const iconsOff = container.getElementsByClassName(styles['CellCheckbox__icon--off'])[0];
        expect(iconsOff.querySelector('.vkuiIcon--check_circle_off_20')).toBeInTheDocument();
        expect(iconsOff.querySelector('.vkuiIcon--check_circle_off_24')).toBeInTheDocument();

        const iconsOn = container.getElementsByClassName(styles['CellCheckbox__icon--on'])[0];
        expect(iconsOn.querySelector('.vkuiIcon--check_circle_on_20')).toBeInTheDocument();
        expect(iconsOn.querySelector('.vkuiIcon--check_circle_on_24')).toBeInTheDocument();
      });
    },
  );
});
