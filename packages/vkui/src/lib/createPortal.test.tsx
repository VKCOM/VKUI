import * as React from 'react';
import { render } from '@testing-library/react';
import { createPortal } from './createPortal';

describe(createPortal, () => {
  it.each([
    { id: undefined, container: undefined },
    { id: 'document.body', container: document.body },
  ])('should in create portal to body if container is $id)', ({ container }) => {
    const rendered = render(<div>{createPortal(<div data-testid="portal"></div>, container)}</div>);
    expect(document.body).toContainElement(rendered.getByTestId('portal'));
  });
});
