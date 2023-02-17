import * as React from 'react';
import { a11yBasicTest } from '../../testing/a11y';
import { Button } from './Button';

describe('Button', () => {
  a11yBasicTest((props) => (
    <Button mode="primary" {...props}>
      Кнопка
    </Button>
  ));
});
