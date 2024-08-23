import { render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { IconExampleForBadgeBasedOnImageBaseSize } from '../../testing/icons';
import { baselineComponent } from '../../testing/utils';
import { GridAvatar, type GridAvatarProps, MAX_GRID_LENGTH } from './GridAvatar';
import styles from './GridAvatar.module.css';
import gridAvatarBadgeStyles from './GridAvatarBadge/GridAvatarBadge.module.css';

const TEST_LOCATORS = {
  HOST: 'grid-avatar',
  BADGE: 'grid-avatar-badge',
};

const GridAvatarTest = (props: GridAvatarProps) => (
  <GridAvatar {...props} data-testid={TEST_LOCATORS.HOST} />
);

const getGridAvatarRootEl = () => screen.getByTestId(TEST_LOCATORS.HOST);

const getGridAvatarBadgeEl = () => screen.getByTestId(TEST_LOCATORS.BADGE);

const getGridAvatarItemEls = () =>
  getGridAvatarRootEl().querySelectorAll(`.${styles['GridAvatar__item']}`);

describe(GridAvatar, () => {
  baselineComponent(GridAvatar);

  it(`should not show more than ${MAX_GRID_LENGTH} items in grid`, () => {
    process.env.NODE_ENV = 'development';
    const error = jest.spyOn(console, 'error').mockImplementation(noop);
    render(<GridAvatarTest src={['#01', '#02', '#03', '#04', '#05']} />);
    expect(error).toHaveBeenCalledWith(
      `%c[VKUI/GridAvatar] Длина массива src (5) больше максимальной (4)`,
      undefined,
    );
    expect(getGridAvatarItemEls().length).toBe(MAX_GRID_LENGTH);
    process.env.NODE_ENV = 'test';
  });
});

describe(GridAvatar.Badge, () => {
  it('should add class name for shift position if size < 96', () => {
    render(
      <GridAvatarTest size={88}>
        <GridAvatar.Badge data-testid={TEST_LOCATORS.BADGE}>
          <IconExampleForBadgeBasedOnImageBaseSize />
        </GridAvatar.Badge>
      </GridAvatarTest>,
    );

    expect(getGridAvatarBadgeEl()).toHaveClass(gridAvatarBadgeStyles['GridAvatarBadge--shifted']);
  });
});
