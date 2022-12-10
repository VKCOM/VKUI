import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { IconExampleForBadgeBasedOnImageBaseSize } from '../../testing/icons';
import { baselineComponent } from '../../testing/utils';
import { Image, ImageProps } from './Image';
import imageBadgeStyles from './ImageBadge/ImageBadge.module.css';

const TEST_LOCATORS = {
  HOST: 'image',
  BADGE: 'image-badge',
};

const ImageTest = (props: ImageProps) => <Image {...props} data-testid={TEST_LOCATORS.HOST} />;
const getImageBadgeEl = () => screen.getByTestId(TEST_LOCATORS.BADGE);

describe(Image, () => {
  baselineComponent(Image);
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
