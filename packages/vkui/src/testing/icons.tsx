import { createElement, useContext } from 'react';
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

export const IconExampleForBadgeBasedOnImageBaseSize = () => {
  const { size } = useContext(ImageBaseContext);
  const iconSize = getBadgeIconSizeByImageBaseSize(size);
  const props = {
    'data-testid': IconExampleForBadgeBasedOnImageBaseSize.DATA_TEST_ID,
  };
  return createElement(Icon20GiftCircleFillRed, {
    width: iconSize,
    height: iconSize,
    ...props,
  });
};

IconExampleForBadgeBasedOnImageBaseSize.DATA_TEST_ID = 'icon-example-for-badge';

export const IconExampleForFallbackBasedOnImageBaseSize = () => {
  const { size } = useContext(ImageBaseContext);
  const iconSize = getFallbackIconSizeByImageBaseSize(size);
  const props = {
    'data-testid': IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
  };
  switch (iconSize) {
    case 12:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return createElement(Icon12Users, props);
    case 16:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return createElement(Icon16Users, props);
    case 20:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return createElement(Icon20Users, props);
    case 24:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return createElement(Icon24Users, props);
    case 28:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return createElement(Icon28Users, props);
    default:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return createElement(Icon36Users, props);
  }
};

IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID = 'icon-example-for-fallback';

export const IconExampleForOverlayBasedOnImageBaseSize = () => {
  const { size } = useContext(ImageBaseContext);
  const iconSize = getOverlayIconSizeByImageBaseSize(size);
  const props = {
    'data-testid': IconExampleForOverlayBasedOnImageBaseSize.DATA_TEST_ID,
  };
  switch (iconSize) {
    case 12:
    case 16:
    case 18:
    case 20:
      return createElement(Icon24AddOutline, {
        width: iconSize,
        height: iconSize,
        ...props,
      });
    case 24:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return createElement(Icon24AddOutline, props);
    case 28:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return createElement(Icon28AddOutline, props);
    case 32:
    default:
      return createElement(Icon28AddOutline, {
        width: iconSize,
        height: iconSize,
        ...props,
      });
  }
};

IconExampleForOverlayBasedOnImageBaseSize.DATA_TEST_ID = 'icon-example-for-overlay';
