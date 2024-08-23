import { render, screen, within } from '@testing-library/react';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
} from '../../testing/icons';
import { baselineComponent } from '../../testing/utils';
import { Avatar, type AvatarProps } from './Avatar';
import { getInitialsFontSize } from './helpers';
import styles from './Avatar.module.css';
import avatarBadgeStyles from './AvatarBadge/AvatarBadge.module.css';

const TEST_LOCATORS = {
  ROOT: 'avatar',
  BADGE: 'avatar-badge',
};

const AvatarTest = (props: AvatarProps) => <Avatar {...props} data-testid={TEST_LOCATORS.ROOT} />;

const getAvatarRootEl = () => screen.getByTestId(TEST_LOCATORS.ROOT);

const getAvatarBadgeEl = () => screen.getByTestId(TEST_LOCATORS.BADGE);

const checkIconSize = (width: number, height: number) => {
  const icon = getAvatarBadgeEl().firstElementChild!;
  expect(icon.getAttribute('width')).toBe(String(width));
  expect(icon.getAttribute('height')).toBe(String(height));
};

describe(Avatar, () => {
  baselineComponent(Avatar);

  it('should use `initials` instead `fallbackIcon`', () => {
    const INITIALS = 'ПД';

    render(
      <AvatarTest
        initials={INITIALS}
        fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />}
      />,
    );

    const elAvatar = getAvatarRootEl();

    expect(elAvatar).toHaveTextContent(INITIALS);
    expect(() =>
      within(elAvatar).getByTestId(IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID),
    ).toThrow();
  });

  it('should use `fallbackIcon` if `initials` is not provided', () => {
    render(<AvatarTest fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />} />);

    const elAvatar = getAvatarRootEl();
    const fallbackIcon = within(elAvatar).getByTestId(
      IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
    );

    expect(elAvatar).toContainElement(fallbackIcon);
  });

  it('should have gradient className with gradient number', () => {
    render(<AvatarTest gradientColor={1} />);
    const elAvatar = getAvatarRootEl();

    expect(elAvatar).toHaveClass(styles['Avatar--gradient-red']);
    expect(elAvatar).toHaveClass(styles['Avatar--has-gradient']);
  });

  it('should have gradient className with gradient constant string', () => {
    render(<AvatarTest gradientColor="red" />);
    const elAvatar = getAvatarRootEl();

    expect(elAvatar).toHaveClass(styles['Avatar--gradient-red']);
    expect(elAvatar).toHaveClass(styles['Avatar--has-gradient']);
  });

  it('should not have gradient className with custom gradient', () => {
    render(<AvatarTest gradientColor="custom" />);
    const elAvatar = getAvatarRootEl();

    expect(elAvatar).toHaveClass(styles['Avatar--has-gradient']);
  });
});

describe(Avatar.Badge, () => {
  it('should add class name for shift position if size < 96', () => {
    render(
      <AvatarTest size={88}>
        <Avatar.Badge data-testid={TEST_LOCATORS.BADGE}>
          <IconExampleForBadgeBasedOnImageBaseSize />
        </Avatar.Badge>
      </AvatarTest>,
    );

    expect(getAvatarBadgeEl()).toHaveClass(avatarBadgeStyles['AvatarBadge--shifted']);
  });
});

describe(Avatar.BadgeWithPreset, () => {
  it("should renders 'online-mobile' badge", () => {
    const { rerender } = render(
      <AvatarTest>
        <Avatar.BadgeWithPreset data-testid={TEST_LOCATORS.BADGE} preset="online-mobile" />
      </AvatarTest>,
    );
    const badge = getAvatarBadgeEl();
    expect(badge).toHaveClass(avatarBadgeStyles['AvatarBadge--preset-onlineMobile']);

    checkIconSize(8, 12);

    rerender(
      <AvatarTest size={70}>
        <Avatar.BadgeWithPreset data-testid={TEST_LOCATORS.BADGE} preset="online-mobile" />
      </AvatarTest>,
    );

    checkIconSize(9, 15);
  });

  it('should renders "online" badge', () => {
    const { rerender } = render(
      <AvatarTest size={36}>
        <Avatar.BadgeWithPreset data-testid={TEST_LOCATORS.BADGE} />
      </AvatarTest>,
    );
    const badge = getAvatarBadgeEl();

    expect(badge).toHaveClass(avatarBadgeStyles['AvatarBadge--preset-online']);

    checkIconSize(12, 12);

    rerender(
      <AvatarTest size={70}>
        <Avatar.BadgeWithPreset data-testid={TEST_LOCATORS.BADGE} />
      </AvatarTest>,
    );
    checkIconSize(15, 15);
  });
});

describe(getInitialsFontSize, () => {
  it.each([
    [16, 5],
    [17, 8],
    [24, 8],
    [25, 10],
    [32, 10],
    [33, 13],
    [36, 13],
    [37, 14],
    [44, 14],
    [45, 17],
    [48, 17],
    [49, 18],
    [55, 18],
    [56, 21],
    [64, 21],
    [65, 26],
    [88, 26],
    [89, 30],
    [96, 30],
    [97, 32],
  ])('should return correct fontSize with avatar size %s', (avatarSize, expectedFontSize) => {
    expect(getInitialsFontSize(avatarSize)).toBe(expectedFontSize);
  });
});
