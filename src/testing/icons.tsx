/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as React from "react";
import {
  Icon12Users,
  Icon16Users,
  Icon20Users,
  Icon24Users,
  Icon28Users,
  Icon36Users,
  Icon24AddOutline,
  Icon28AddOutline,
  Icon20GiftCircleFillRed,
} from "@vkontakte/icons";
import {
  ImageBaseContext,
  getBadgeIconSizeByImageBaseSize,
  getOverlayIconSizeByImageBaseSize,
  getFallbackIconSizeByImageBaseSize,
} from "../components/ImageBase/ImageBase";

export const IconExampleForBadgeBasedOnImageBaseSize = () => {
  const { size } = React.useContext(ImageBaseContext);
  const iconSize = getBadgeIconSizeByImageBaseSize(size);
  const props = {
    "data-testid": IconExampleForBadgeBasedOnImageBaseSize.DATA_TEST_ID,
  };
  return React.createElement(Icon20GiftCircleFillRed, {
    width: iconSize,
    height: iconSize,
    ...props,
  });
};

IconExampleForBadgeBasedOnImageBaseSize.DATA_TEST_ID = "icon-example-for-badge";

export const IconExampleForFallbackBasedOnImageBaseSize = () => {
  const { size } = React.useContext(ImageBaseContext);
  const iconSize = getFallbackIconSizeByImageBaseSize(size);
  const props = {
    "data-testid": IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
  };
  switch (iconSize) {
    case 12:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return React.createElement(Icon12Users, props);
    case 16:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return React.createElement(Icon16Users, props);
    case 20:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return React.createElement(Icon20Users, props);
    case 24:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return React.createElement(Icon24Users, props);
    case 28:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return React.createElement(Icon28Users, props);
    default:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return React.createElement(Icon36Users, props);
  }
};

IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID =
  "icon-example-for-fallback";

export const IconExampleForOverlayBasedOnImageBaseSize = () => {
  const { size } = React.useContext(ImageBaseContext);
  const iconSize = getOverlayIconSizeByImageBaseSize(size);
  const props = {
    "data-testid": IconExampleForOverlayBasedOnImageBaseSize.DATA_TEST_ID,
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
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
      return React.createElement(Icon24AddOutline, props);
    case 28:
      // @ts-expect-error: TS2769 styleguide не может распарсить `as ...` на `props`
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

IconExampleForOverlayBasedOnImageBaseSize.DATA_TEST_ID =
  "icon-example-for-overlay";
