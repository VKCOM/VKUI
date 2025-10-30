import * as React from 'react';
import {
  Icon12Users,
  Icon16Users,
  Icon20GiftCircleFillRed,
  Icon20Users,
  Icon24AddOutline,
  Icon24Users,
  Icon28AddOutline,
  Icon28Users,
  Icon36Users,
} from '@vkontakte/icons';
import {
  getBadgeIconSizeByImageBaseSize,
  getFallbackIconSizeByImageBaseSize,
  getOverlayIconSizeByImageBaseSize,
  ImageBaseContext,
} from '../components/ImageBase/ImageBase';
import type { HasDataAttribute } from '../types';

export const IconExampleForBadgeBasedOnImageBaseSize = () => {
  const { size } = React.useContext(ImageBaseContext);
  const iconSize = getBadgeIconSizeByImageBaseSize(size);
  const props = {
    'data-testid': IconExampleForBadgeBasedOnImageBaseSize.DATA_TEST_ID,
  };
  return React.createElement(Icon20GiftCircleFillRed, {
    width: iconSize,
    height: iconSize,
    ...props,
  });
};

IconExampleForBadgeBasedOnImageBaseSize.DATA_TEST_ID = 'icon-example-for-badge';

export const IconExampleForFallbackBasedOnImageBaseSize = () => {
  const { size } = React.useContext(ImageBaseContext);
  const iconSize = getFallbackIconSizeByImageBaseSize(size);
  const props: HasDataAttribute = {
    'data-testid': IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
  };
  switch (iconSize) {
    case 12:
      return React.createElement(Icon12Users, props);
    case 16:
      return React.createElement(Icon16Users, props);
    case 20:
      return React.createElement(Icon20Users, props);
    case 24:
      return React.createElement(Icon24Users, props);
    case 28:
      return React.createElement(Icon28Users, props);
    default:
      return React.createElement(Icon36Users, props);
  }
};

IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID = 'icon-example-for-fallback';

export const IconExampleForOverlayBasedOnImageBaseSize = () => {
  const { size } = React.useContext(ImageBaseContext);
  const iconSize = getOverlayIconSizeByImageBaseSize(size);
  const props: HasDataAttribute = {
    'data-testid': IconExampleForOverlayBasedOnImageBaseSize.DATA_TEST_ID,
  };
  switch (iconSize) {
    case 12:
    case 16:
    case 18:
    case 20:
      return React.createElement(Icon24AddOutline, {
        width: iconSize,
        height: iconSize,
        ...props,
      });
    case 24:
      return React.createElement(Icon24AddOutline, props);
    case 28:
      return React.createElement(Icon28AddOutline, props);
    case 32:
    default:
      return React.createElement(Icon28AddOutline, {
        width: iconSize,
        height: iconSize,
        ...props,
      });
  }
};

IconExampleForOverlayBasedOnImageBaseSize.DATA_TEST_ID = 'icon-example-for-overlay';
