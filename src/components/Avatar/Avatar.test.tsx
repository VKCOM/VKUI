import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
} from '../../testing/icons';
import { baselineComponent, tryToGetByTestId } from '../../testing/utils';
import { Avatar, AvatarProps } from './Avatar';
import avatarBadgeStyles from './AvatarBadge/AvatarBadge.module.css';

const TEST_LOCATORS = {
  ROOT: 'avatar',
  BADGE: 'avatar-badge',
};

const AvatarTest = (props: AvatarProps) => <Avatar {...props} data-testid={TEST_LOCATORS.ROOT} />;

const getAvatarRootEl = () => screen.getByTestId(TEST_LOCATORS.ROOT);

const getAvatarBadgeEl = () => screen.getByTestId(TEST_LOCATORS.BADGE);

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
    const fallbackIcon = tryToGetByTestId(
      IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
      elAvatar,
    );

    expect(elAvatar).toHaveTextContent(INITIALS);
    expect(elAvatar).not.toContainElement(fallbackIcon);
  });

  it('should use `fallbackIcon` if `initials` is not provided', () => {
    render(<AvatarTest fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />} />);

    const elAvatar = getAvatarRootEl();
    const fallbackIcon = tryToGetByTestId(
      IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
      elAvatar,
    );

    expect(elAvatar).toContainElement(fallbackIcon);
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
  it("should renders 'online' badge", () => {
    render(
      <AvatarTest>
        <Avatar.BadgeWithPreset data-testid={TEST_LOCATORS.BADGE} preset="online" />
      </AvatarTest>,
    );

    expect(getAvatarBadgeEl()).toHaveClass(avatarBadgeStyles['AvatarBadge--preset-online']);
  });

  it("should renders 'online-mobile' badge", () => {
    render(
      <AvatarTest>
        <Avatar.BadgeWithPreset data-testid={TEST_LOCATORS.BADGE} preset="online-mobile" />
      </AvatarTest>,
    );

    expect(getAvatarBadgeEl()).toHaveClass(avatarBadgeStyles['AvatarBadge--preset-onlineMobile']);
  });
});
