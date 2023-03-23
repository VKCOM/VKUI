import * as React from 'react';
import { a11yBasicTest } from '../../testing/a11y';
import { Form } from './Form';

describe('Form', () => {
  a11yBasicTest((props) => <Form {...props} />);
});
