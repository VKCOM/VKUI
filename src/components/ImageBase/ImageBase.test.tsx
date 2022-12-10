import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
} from '../../testing/icons';
import { baselineComponent, tryToGetByTestId, imgOnlyAttributes } from '../../testing/utils';
import { ImageBase, ImageBaseProps } from './ImageBase';

const TEST_LOCATORS = {
  ROOT: 'image-base',
  BADGE: 'image-base-badge',
  OVERLAY: 'image-base-overlay',
};

const ImageBaseTest = (props: ImageBaseProps) => (
  <ImageBase {...props} data-testid={TEST_LOCATORS.ROOT} />
);

const getImageBaseRootEl = () => screen.getByTestId(TEST_LOCATORS.ROOT);

const getImageBaseImgEl = (elParent = getImageBaseRootEl()) => elParent.querySelector('img');

describe(ImageBase, () => {
  baselineComponent(ImageBase);

  it("should render 'img' tag if `src` is passed", () => {
    render(<ImageBaseTest src="#" />);
    expect(getImageBaseImgEl()).toBeInTheDocument();
  });

  it("should not render 'img' tag if `src` is not passed", () => {
    render(<ImageBaseTest />);
    expect(getImageBaseImgEl()).not.toBeInTheDocument();
  });

  it('should show fallback icon if `src` is not passed', () => {
    render(<ImageBaseTest fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />} />);

    const elImageBase = getImageBaseRootEl();
    const elImageBaseIcon = tryToGetByTestId(
      IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
      elImageBase,
    );

    expect(elImageBase).toContainElement(elImageBaseIcon);
  });

  it('should show fallback icon if `src` is bad', (doneCallback) => {
    render(
      <ImageBaseTest
        src="https://404.please"
        fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />}
      />,
    );

    const elImageBase = getImageBaseRootEl();
    const elImg = getImageBaseImgEl(elImageBase) as HTMLImageElement; // Note: потому что точно знаем, что не null

    elImg.onerror = jest.fn(() => {
      // ждём re-render со стороны react
      setTimeout(() => {
        const elFallbackIcon = tryToGetByTestId(
          IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
          elImageBase,
        );
        expect(elImageBase).toContainElement(elFallbackIcon);
        doneCallback();
      }, 0);
    });

    fireEvent.error(elImg);
  });

  it('[unwanted case] should show children and fallbackIcon', () => {
    const CHILDREN = '42';

    render(
      <ImageBaseTest fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />}>
        {CHILDREN}
      </ImageBaseTest>,
    );

    const elImageBase = getImageBaseRootEl();
    const elFallbackIcon = tryToGetByTestId(
      IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
      elImageBase,
    );

    expect(elImageBase).toHaveTextContent(CHILDREN);
    expect(elImageBase).toContainElement(elFallbackIcon);
  });

  it("should provide `ref` of 'img' tag", () => {
    const refCallback = jest.fn();
    render(<ImageBaseTest src="#" getRef={refCallback} />);
    expect(refCallback).toBeCalled();
  });

  it("should have all attributes of 'img' tag", () => {
    render(<ImageBaseTest {...imgOnlyAttributes} />);

    Object.keys(imgOnlyAttributes).forEach((attr) => {
      expect(getImageBaseImgEl()).toHaveAttribute(attr);
    });
  });
});

describe(ImageBase.Badge, () => {
  it('should renders badge if is passed to children', () => {
    render(
      <ImageBaseTest>
        <ImageBase.Badge data-testid={TEST_LOCATORS.BADGE}>
          <IconExampleForBadgeBasedOnImageBaseSize />
        </ImageBase.Badge>
      </ImageBaseTest>,
    );

    const elImageBase = getImageBaseRootEl();
    const elImageBaseBade = tryToGetByTestId(TEST_LOCATORS.BADGE, elImageBase);

    expect(elImageBase).toContainElement(elImageBaseBade);
  });
});

describe(ImageBase.Overlay, () => {
  it('should renders overlay if passed', () => {
    render(
      <ImageBaseTest>
        <ImageBase.Overlay data-testid={TEST_LOCATORS.OVERLAY}>
          <IconExampleForBadgeBasedOnImageBaseSize />
        </ImageBase.Overlay>
      </ImageBaseTest>,
    );

    const elImageBase = getImageBaseRootEl();
    const elImageBaseOverlay = tryToGetByTestId(TEST_LOCATORS.OVERLAY, elImageBase);

    expect(elImageBase).toContainElement(elImageBaseOverlay);
  });
});
