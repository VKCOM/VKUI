import { render, screen } from '@testing-library/react';
import { Icon20User, Icon24WalletOutline } from '@vkontakte/icons';
import { baselineComponent } from '../../testing/utils';
import { IconButton } from '../IconButton/IconButton';
import { FormField } from './FormField';
import styles from './FormField.module.css';

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

  it('check align of after and before icons', () => {
    render(
      <FormField
        after={
          <IconButton data-testid="after">
            <Icon24WalletOutline />
          </IconButton>
        }
        before={
          <IconButton data-testid="before">
            <Icon20User />
          </IconButton>
        }
        beforeAlign="start"
        afterAlign="end"
      >
        <div></div>
      </FormField>,
    );

    expect(screen.getByTestId('before').parentElement).toHaveClass(styles.iconAlignStart);
    expect(screen.getByTestId('after').parentElement).toHaveClass(styles.iconAlignEnd);
  });
});
