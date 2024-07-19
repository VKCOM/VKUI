import { fireEvent, render, screen, within } from '@testing-library/react';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
} from '../../testing/icons';
import { baselineComponent, imgOnlyAttributes } from '../../testing/utils';
import { ImageBase, ImageBaseProps } from './ImageBase';
import styles from './ImageBase.module.css';

const TEST_LOCATORS = {
  ROOT: 'image-base',
  BADGE: 'image-base-badge',
  OVERLAY: 'image-base-overlay',
};

const ImageBaseTest = (props: ImageBaseProps) => (
  <ImageBase {...props} data-testid={TEST_LOCATORS.ROOT} />
);

const getImageBaseRootEl = () => screen.getByTestId(TEST_LOCATORS.ROOT);

const getImageBaseImgEl = (elParent = getImageBaseRootEl()) => within(elParent).getByRole('img');

describe(ImageBase, () => {
  baselineComponent(ImageBase);

  it("should render 'img' tag if `src` is passed", () => {
    render(<ImageBaseTest src="#" />);
    expect(getImageBaseImgEl()).toBeInTheDocument();
  });

  it("should not render 'img' tag if `src` is not passed", () => {
    render(<ImageBaseTest />);
    expect(() => getImageBaseImgEl()).toThrow();
  });

  it('should have style objectFit ', () => {
    const { rerender } = render(<ImageBaseTest src="#" objectFit="contain" />);
    expect(getImageBaseImgEl()).toHaveClass(styles['ImageBase__img--objectFit-contain']);

    rerender(<ImageBaseTest src="#" objectFit="cover" />);
    expect(getImageBaseImgEl()).toHaveClass(styles['ImageBase__img--objectFit-cover']);

    rerender(<ImageBaseTest src="#" objectFit="none" />);
    expect(getImageBaseImgEl()).toHaveClass(styles['ImageBase__img--objectFit-none']);

    rerender(<ImageBaseTest src="#" objectFit="scale-down" />);
    expect(getImageBaseImgEl()).toHaveClass(styles['ImageBase__img--objectFit-scaleDown']);
  });

  it('should show fallback icon if `src` is not passed', () => {
    render(<ImageBaseTest fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />} />);

    const elImageBase = getImageBaseRootEl();
    const elImageBaseIcon = within(elImageBase).getByTestId(
      IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
    );

    expect(elImageBase).toContainElement(elImageBaseIcon);
  });

  it('should show fallback icon if `src` is bad', (doneCallback) => {
    const onError = jest.fn();
    render(
      <ImageBaseTest
        src="https://404.please"
        fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />}
        onError={onError}
      />,
    );

    const elImageBase = getImageBaseRootEl();

    fireEvent.error(getImageBaseImgEl(elImageBase));

    const elFallbackIcon = within(elImageBase).getByTestId(
      IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
    );
    expect(elImageBase).toContainElement(elFallbackIcon);
    expect(onError).toHaveBeenCalledTimes(1);
    doneCallback();
  });

  it('[unwanted case] should show children and fallbackIcon', () => {
    const CHILDREN = '42';

    render(
      <ImageBaseTest fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />}>
        {CHILDREN}
      </ImageBaseTest>,
    );

    const elImageBase = getImageBaseRootEl();
    const elFallbackIcon = within(elImageBase).getByTestId(
      IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
    );

    expect(elImageBase).toHaveTextContent(CHILDREN);
    expect(elImageBase).toContainElement(elFallbackIcon);
  });

  it("should provide `ref` of 'img' tag", () => {
    const refCallback = jest.fn();
    render(<ImageBaseTest src="#" getRef={refCallback} />);
    expect(refCallback).toHaveBeenCalled();
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

    expect(onLoadMock).not.toHaveBeenCalled();

    const imageElement = getImageBaseImgEl();
    if (!imageElement) {
      throw new Error('Cannot find img element');
    }

    fireEvent.load(imageElement);

    expect(onLoadMock).toHaveBeenCalledTimes(1);
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
    expect(onLoadMock).toHaveBeenCalledTimes(1);

    const imageElement = getImageBaseImgEl();

    fireEvent.load(imageElement);

    // make sure we ignore img.onLoad that is fired for some reason after we manually handled the complete state.
    expect(onLoadMock).toHaveBeenCalledTimes(1);
  });

  it('should have className with keepRatio', () => {
    render(<ImageBaseTest src="#" keepAspectRatio={true} />);

    expect(getImageBaseImgEl()).toHaveClass(styles['ImageBase__img--keepRatio']);
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
    const elImageBaseBade = within(elImageBase).getByTestId(TEST_LOCATORS.BADGE);

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
    const elImageBaseOverlay = within(elImageBase).getByTestId(TEST_LOCATORS.OVERLAY);

    expect(elImageBase).toContainElement(elImageBaseOverlay);
  });
});
