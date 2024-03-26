import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { ModalSheet } from './ModalSheet';

describe('ModalSheet', () => {
  baselineComponent((restProps) => (
    <AdaptivityProvider sizeX="regular">
      <ModalSheet {...restProps}>
        <ModalPageHeader>Заголовок</ModalPageHeader>
      </ModalSheet>
    </AdaptivityProvider>
  ));

  test.todo('TODO (@severecloud): Need more tests');
});
