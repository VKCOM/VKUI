import * as React from 'react';
import { a11yBasicTest } from '../../testing/a11y';
import { SubnavigationButton } from './SubnavigationButton';

describe('SubnavigationButton', () => {
  a11yBasicTest((props) => (
    <SubnavigationButton {...props}>Subnavigation Button</SubnavigationButton>
  ));
});
