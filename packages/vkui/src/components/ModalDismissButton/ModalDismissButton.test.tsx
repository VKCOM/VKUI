import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { ModalDismissButton } from './ModalDismissButton';

describe('ModalDismissButton', () => {
  baselineComponent((props) => <ModalDismissButton onClick={noop} {...props} />);
});
