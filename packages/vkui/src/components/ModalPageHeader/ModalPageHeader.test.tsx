import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { ModalPageHeader } from './ModalPageHeader';

describe('ModalPageHeader', () => {
  baselineComponent((props) => <ModalPageHeader {...props}>ModalPageHeader</ModalPageHeader>);
});
