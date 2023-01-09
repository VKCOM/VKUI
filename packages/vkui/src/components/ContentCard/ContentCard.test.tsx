import * as React from 'react';
import { screen, render } from '@testing-library/react';
import { baselineComponent, imgOnlyAttributes } from '../../testing/utils';
import { ContentCard, ContentCardProps } from './ContentCard';

const ContentCardTest = (props: ContentCardProps) => (
  <ContentCard
    subtitle="VKUI"
    header="ContentCard example"
    caption="VKUI Styleguide > Blocks > ContentCard"
    {...props}
    data-testid="card"
  />
);
const card = () => screen.getByTestId('card');
const img = () => card().querySelector('img');

describe('ContentCard', () => {
  baselineComponent((props) => <ContentCard src="/image.png" {...props} />);

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

    expect(refCallback).toBeCalled();
  });

  it('[img] passes all img attributes to img', () => {
    render(<ContentCardTest {...imgOnlyAttributes} />);

    Object.keys(imgOnlyAttributes).forEach((attr) => {
      expect(img()).toHaveAttribute(attr);
    });
  });

  it('[onClick] is disabled when there is no onClick', () => {
    render(<ContentCardTest />);
    const tappable = screen.getByRole('button');

    expect(tappable).toHaveAttribute('aria-disabled', 'true');
  });
});
