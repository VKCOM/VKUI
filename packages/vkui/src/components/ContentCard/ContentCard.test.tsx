import { render, screen } from '@testing-library/react';
import { baselineComponent, imgOnlyAttributes } from '../../testing/utils';
import { CardGrid } from '../CardGrid/CardGrid';
import { ContentCard, type ContentCardProps } from './ContentCard';

const ContentCardTest = (props: ContentCardProps) => (
  <ContentCard
    overTitle="VKUI"
    title="ContentCard example"
    caption="VKUI Styleguide > Blocks > ContentCard"
    {...props}
    data-testid="card"
  />
);
const card = () => screen.getByTestId('card');
const img = () => card().querySelector('img');

describe('ContentCard', () => {
  baselineComponent((props) => (
    <CardGrid>
      <ContentCard src="/image.png" {...props} description="ContentCard" />
    </CardGrid>
  ));

  it('[img] renders img if src is passed', () => {
    render(<ContentCardTest src="/image.png" />);

    expect(img()).toBeInTheDocument();
  });

  it('[img] does not render img if there is no src', () => {
    render(<ContentCardTest />);

    expect(img()).not.toBeInTheDocument();
  });

  it('[img] passes ref to img', () => {
    const refCallback = jest.fn();
    render(<ContentCardTest src="/image.png" getRef={refCallback} />);

    expect(refCallback).toHaveBeenCalled();
  });

  it('[img] passes all img attributes to img', () => {
    render(<ContentCardTest {...imgOnlyAttributes} />);

    Object.keys(imgOnlyAttributes).forEach((attr) => {
      expect(img()).toHaveAttribute(attr);
    });
  });

  it('[onClick] is disabled when there is no onClick', () => {
    render(<ContentCardTest />);
    const el = screen.getByTestId('card');

    expect(el.tagName.toLowerCase()).toBe('div');
    expect(el.role).toBeUndefined();
    expect(el.getAttribute('disabled')).toBeNull();
    expect(el.getAttribute('aria-disabled')).toBeNull();
  });

  it('changes title tag with titleComponent prop', () => {
    const { rerender } = render(<ContentCardTest />);

    // по умолчанию span
    expect(screen.getByText('ContentCard example').tagName.toLowerCase()).toMatch('span');

    rerender(<ContentCardTest titleComponent="h4" />);
    expect(screen.getByText('ContentCard example').tagName.toLowerCase()).toMatch('h4');
  });
});
