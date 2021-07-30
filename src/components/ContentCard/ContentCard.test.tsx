import { screen, render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import ContentCard, { ContentCardProps } from './ContentCard';

const ContentCardTest = (props: ContentCardProps) => (
  <ContentCard
    subtitle="VKUI"
    header="ContentCard example"
    caption="VKUI Styleguide > Blocks > ContentCard"
    image="/image.png"
    {...props}
    data-testid="card"
  />
);

describe('ContentCard', () => {
  baselineComponent((props) => <ContentCard image="/image.png" {...props} />);

  it('onClick: ContentCard without onClick is treated as disabled', () => {
    render(<ContentCardTest />);
    const tappable = screen.getByRole('button');

    expect(tappable).toHaveAttribute('aria-disabled', 'true');
  });
});
