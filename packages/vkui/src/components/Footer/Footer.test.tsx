import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Footer } from './Footer';

describe('Footer', () => {
  baselineComponent(Footer);

  it('checks that contentinfo role is set by default', () => {
    const { rerender } = render(<Footer>Copyright @company</Footer>);

    // по умолчанию Component=`footer` и role=`contentinfo`;
    const footer = screen.getByRole('contentinfo');
    expect(footer.nodeName).toBe('FOOTER');

    // role может быть переопределена через свойство role
    rerender(<Footer role="generic">Copyright @company</Footer>);
    expect(screen.queryByRole('contentinfo')).toBeFalsy();

    // role по умолчанию не выставляется, если Component не `footer`
    rerender(<Footer Component="div">Copyright @company</Footer>);
    expect(screen.queryByRole('contentinfo')).toBeFalsy();
  });
});
