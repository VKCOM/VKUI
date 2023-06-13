import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { ModalPage } from './ModalPage';

describe('ModalPage', () => {
  baselineComponent((props) => <ModalPage nav="id" {...props} />, {
    // TODO [a11y]: "ARIA dialog and alertdialog nodes should have an accessible name (aria-dialog-name)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-dialog-name?application=axeAPI
    a11y: false,
  });
});
