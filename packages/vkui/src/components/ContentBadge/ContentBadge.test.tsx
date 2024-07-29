import {render, screen} from '@testing-library/react';
import { Icon16Services } from '@vkontakte/icons';
import { baselineComponent } from '../../testing/utils';
import {ContentBadge, ContentBadgeProps} from './ContentBadge';
import styles from "./ContentBadge.module.css";
import footnoteStyles from '../Typography/Footnote/Footnote.module.css';

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

  it.each<{props: Partial<ContentBadgeProps>, classNames: string[]}>([
    {
      props: {
        mode: 'outline',
      },
      classNames: [styles['ContentBadge--mode-outline']],
    },
    {
      props: {
        size: 'l',
        capsule: true,
      },
      classNames: [styles['ContentBadge--capsule'], footnoteStyles['Footnote']],
    },
  ])(`should have classNames "$classNames" when has props "$props"`, ({props, classNames}) => {
    render(
      <ContentBadge {...props} data-testid="badge">
        <ContentBadge.SlotIcon >
          <Icon16Services />
        </ContentBadge.SlotIcon>
        Test
      </ContentBadge>,
    );
    const badge = screen.getByTestId('badge');
    classNames.forEach(className => expect(badge).toHaveClass(className));
  })
});
