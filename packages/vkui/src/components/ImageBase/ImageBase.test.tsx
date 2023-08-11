import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
} from '../../testing/icons';
import { baselineComponent, imgOnlyAttributes, tryToGetByTestId } from '../../testing/utils';
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

const getImageBaseImgEl = (elParent = getImageBaseRootEl()) =>
  elParent.querySelector<HTMLImageElement>('img');

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
    const elImg = getImageBaseImgEl(elImageBase);
    if (!elImg) {
      throw new Error('Cannot find img element');
    }

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

  it('calls onLoad prop when image emits load event', () => {
    const onLoadMock = jest.fn();
    render(<ImageBaseTest onLoad={onLoadMock} src="https://image.to.load" />);

    expect(onLoadMock).not.toBeCalled();

    const imageElement = getImageBaseImgEl();
    if (!imageElement) {
      throw new Error('Cannot find img element');
    }

    fireEvent.load(imageElement);

    expect(onLoadMock).toBeCalledTimes(1);
  });

  it('calls onLoad prop if image is already loaded but onLoad event listener missed that', () => {
    // could happen when image loaded after the event listener was initialized
    const onLoadMock = jest.fn();
    const getRefMock = jest
      .fn()
      .mockImplementation(function emulateImageWithCompleteState(element) {
        if (!element) {
          return;
        }

        Object.defineProperty(element, 'complete', {
          get: () => true,
        });
      });

    render(<ImageBaseTest getRef={getRefMock} onLoad={onLoadMock} src="https://loaded.image" />);

    // make sure onLoad prop is called as is if img elment has 'complete=true'
    expect(onLoadMock).toBeCalledTimes(1);

    const imageElement = getImageBaseImgEl();
    if (!imageElement) {
      throw new Error('Cannot find img element');
    }

    fireEvent.load(imageElement);

    // make sure we ignore img.onLoad that is fired for some reason after we manually handled the complete state.
    expect(onLoadMock).toBeCalledTimes(1);
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
