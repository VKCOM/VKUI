import { render } from '@testing-library/react';
import { Icon16Services } from '@vkontakte/icons';
import { baselineComponent } from '../../testing/utils';
import { ContentBadge } from './ContentBadge';

describe(ContentBadge, () => {
  baselineComponent((props) => <ContentBadge {...props}>Test</ContentBadge>);

  baselineComponent(
    (props) => (
      <ContentBadge.SlotIcon {...props}>
        <Icon16Services />{' '}
      </ContentBadge.SlotIcon>
    ),
    undefined,
    'baseline (ContentBadge.SlotIcon)',
  );

  it('should hide icon if size="s"', () => {
    const result = render(
      <ContentBadge size="m">
        <ContentBadge.SlotIcon data-testid="icon">
          <Icon16Services />
        </ContentBadge.SlotIcon>
        Test
      </ContentBadge>,
    );

    expect(result.getByTestId('icon')).toBeInTheDocument();

    result.rerender(
      <ContentBadge size="s">
        <ContentBadge.SlotIcon data-testid="icon">
          <Icon16Services />
        </ContentBadge.SlotIcon>
        Test
      </ContentBadge>,
    );

    expect(() => result.getByTestId('icon')).toThrow();
  });
});
