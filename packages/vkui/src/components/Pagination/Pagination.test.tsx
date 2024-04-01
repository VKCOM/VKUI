import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { Button } from '../Button/Button';
import { Tappable } from '../Tappable/Tappable';
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

  baselineComponent(
    (props) => <Pagination {...props} totalPages={123} currentPage={4} />,
    undefined,
    'with ellipsis',
  );

  baselineComponent(
    (props) => (
      <Pagination
        {...props}
        totalPages={123}
        currentPage={4}
        renderPageButton={(props) => <Tappable {...props} href={`#${props['data-page']}`} />}
        renderNavigationButton={(props) => <Button {...props} href={`#${props['data-page']}`} />}
      />
    ),
    undefined,
    'with href',
  );
});
