import { render, screen } from '@testing-library/react';
import { IconExampleForBadgeBasedOnImageBaseSize } from '../../testing/icons';
import { getAvatarUrl } from '../../testing/mock';
import { baselineComponent } from '../../testing/utils';
import { Image, type ImageProps } from './Image';
import styles from './Image.module.css';
import imageBadgeStyles from './ImageBadge/ImageBadge.module.css';

const TEST_LOCATORS = {
  HOST: 'image',
  BADGE: 'image-badge',
};

const ImageTest = (props: ImageProps) => <Image {...props} data-testid={TEST_LOCATORS.HOST} />;
const getImageBadgeEl = () => screen.getByTestId(TEST_LOCATORS.BADGE);

type BorderTypeProps =
  | 'borderRadius'
  | 'borderStartStartRadius'
  | 'borderStartEndRadius'
  | 'borderEndStartRadius'
  | 'borderEndEndRadius';

describe(Image, () => {
  baselineComponent(Image);

  describe.each<[BorderTypeProps, string, string]>([
    ['borderRadius', '--vkui_internal--Image_border_radius', ''],
    [
      'borderStartStartRadius',
      '--vkui_internal--Image_border_start_start_radius',
      styles['Image--borderStartStartRadius'],
    ],
    [
      'borderStartEndRadius',
      '--vkui_internal--Image_border_start_end_radius',
      styles['Image--borderStartEndRadius'],
    ],
    [
      'borderEndStartRadius',
      '--vkui_internal--Image_border_end_start_radius',
      styles['Image--borderEndStartRadius'],
    ],
    [
      'borderEndEndRadius',
      '--vkui_internal--Image_border_end_end_radius',
      styles['Image--borderEndEndRadius'],
    ],
  ])('check correct %s', (borderProp, cssVariable, className) => {
    it.each<[ImageProps['borderRadius'], number, number]>([
      ['s', 32, 2],
      ['s', 56, 3],
      ['s', 57, 4],

      ['m', 32, 3],
      ['m', 48, 4],
      ['m', 72, 6],
      ['m', 80, 8],
      ['m', 81, 10],

      ['l', 16, 4],
      ['l', 20, 5],
      ['l', 32, 6],
      ['l', 40, 8],
      ['l', 48, 10],
      ['l', 56, 12],
      ['l', 64, 14],
      ['l', 65, 16],
    ])('should have correct value %s', (borderSize, avatarSize, expectedSize) => {
      const borderProps = {
        [borderProp]: borderSize,
      };
      render(
        <Image
          size={avatarSize}
          data-testid="image"
          src={getAvatarUrl('app_shorm_online')}
          alt="Приложение шторм онлайн"
          {...borderProps}
        />,
      );

      className && expect(screen.getByTestId('image')).toHaveClass(className);
      expect(screen.getByTestId('image')).toHaveStyle(`${cssVariable}: ${expectedSize}px`);
    });
  });
});

describe(Image.Badge, () => {
  it('should add class name for shift position if size < 96', () => {
    render(
      <ImageTest size={88}>
        <Image.Badge data-testid={TEST_LOCATORS.BADGE}>
          <IconExampleForBadgeBasedOnImageBaseSize />
        </Image.Badge>
      </ImageTest>,
    );

    expect(getImageBadgeEl()).toHaveClass(imageBadgeStyles['ImageBadge--shifted']);
  });
});
