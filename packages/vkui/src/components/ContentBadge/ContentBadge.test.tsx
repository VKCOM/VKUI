import { render, screen } from '@testing-library/react';
import { Icon16Services } from '@vkontakte/icons';
import { baselineComponent } from '../../testing/utils';
import { ContentBadge } from './ContentBadge';

describe(ContentBadge, () => {
  baselineComponent((props) => <ContentBadge {...props}>Test</ContentBadge>);

  baselineComponent(
    (props) => (
      <ContentBadge.IconSlot {...props}>
        <Icon16Services />{' '}
      </ContentBadge.IconSlot>
    ),
    undefined,
    'baseline (ContentBadge.IconSlot)',
  );

  it('should hide icon if size="s"', () => {
    const result = render(
      <ContentBadge size="m">
        <ContentBadge.IconSlot data-testid="icon">
          <Icon16Services />
        </ContentBadge.IconSlot>
        Test
      </ContentBadge>,
    );

    expect(result.getByTestId('icon')).toBeInTheDocument();

    result.rerender(
      <ContentBadge size="s">
        <ContentBadge.IconSlot data-testid="icon">
          <Icon16Services />
        </ContentBadge.IconSlot>
        Test
      </ContentBadge>,
    );

    expect(() => result.getByTestId('icon')).toThrow();
  });

  it('should apply custom appearance styles in primary mode', () => {
    render(
      <ContentBadge data-testid="badge" appearance="#f3f405" mode="primary">
        Test
      </ContentBadge>,
    );

    const badge = screen.getByTestId('badge');

    expect(badge).toHaveStyle('--vkui_internal_ContentBadge--background: #f3f405');
    expect(badge).toHaveStyle(
      '--vkui_internal_ContentBadge--color: var(--vkui--color_text_contrast)',
    );
    expect(badge).toHaveStyle(
      '--vkui_internal_ContentBadge--iconColor: var(--vkui--color_icon_contrast)',
    );
  });

  it('should apply custom appearance styles in secondary mode', () => {
    render(
      <ContentBadge
        data-testid="badge"
        appearance="var(--vkui--color_icon_tertiary)"
        mode="secondary"
      >
        Test
      </ContentBadge>,
    );

    const badge = screen.getByTestId('badge');

    expect(badge).toHaveStyle(
      '--vkui_internal_ContentBadge--color: var(--vkui--color_icon_tertiary)',
    );
    expect(badge).toHaveStyle(
      '--vkui_internal_ContentBadge--iconColor: var(--vkui--color_icon_tertiary)',
    );
    expect(badge).toHaveStyle(
      '--vkui_internal_ContentBadge--background: var(--vkui--color_icon_tertiary)',
    );
    expect(badge).toHaveStyle('--vkui_internal_ContentBadge--backgroundOpacity: 0.16');
  });

  it('should apply custom appearance styles in outline mode', () => {
    render(
      <ContentBadge data-testid="badge" appearance="#f3f405" mode="outline">
        Test
      </ContentBadge>,
    );

    const badge = screen.getByTestId('badge');

    expect(badge).toHaveStyle('--vkui_internal_ContentBadge--color: #f3f405');
    expect(badge).toHaveStyle('--vkui_internal_ContentBadge--iconColor: #f3f405');
    expect(badge).toHaveStyle('--vkui_internal_ContentBadge--borderColor: #f3f405');
  });
});
