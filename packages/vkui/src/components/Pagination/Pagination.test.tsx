import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  baselineComponent(Pagination, undefined, 'with only icon');

  baselineComponent(
    (props) => <Pagination {...props} navigationButtonsStyle="caption" />,
    undefined,
    'with only caption',
  );

  baselineComponent(
    (props) => <Pagination {...props} navigationButtonsStyle="both" />,
    undefined,
    'with both',
  );
});
