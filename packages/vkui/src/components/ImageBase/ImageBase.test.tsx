import { fireEvent, render, screen, within } from '@testing-library/react';
import { Icon12Add, Icon16Clear, Icon20Add, Icon96GoodsCollection } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
} from '../../testing/icons';
import { baselineComponent, imgOnlyAttributes, setNodeEnv } from '../../testing/utils';
import {
  getBadgeIconSizeByImageBaseSize,
  getFallbackIconSizeByImageBaseSize,
  getOverlayIconSizeByImageBaseSize,
  ImageBase,
  type ImageBaseProps,
} from './ImageBase';
import { imageBaseSizes } from './types';
import {
  validateBadgeIcon,
  validateFallbackIcon,
  validateOverlayIcon,
  validateSize,
} from './validators';
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

let logStub: jest.SpyInstance | null = null;
beforeEach(() => {
  logStub = jest.spyOn(console, 'log').mockImplementation(noop);
});

afterEach(() => {
  logStub?.mockRestore();
});

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
    expect(getImageBaseImgEl()).toHaveClass(styles.imgObjectFitContain);

    rerender(<ImageBaseTest src="#" objectFit="cover" />);
    expect(getImageBaseImgEl()).toHaveClass(styles.imgObjectFitCover);

    rerender(<ImageBaseTest src="#" objectFit="none" />);
    expect(getImageBaseImgEl()).toHaveClass(styles.imgObjectFitNone);

    rerender(<ImageBaseTest src="#" objectFit="scale-down" />);
    expect(getImageBaseImgEl()).toHaveClass(styles.imgObjectFitScaleDown);

    rerender(<ImageBaseTest src="#" objectFit="fill" />);
    expect(getImageBaseImgEl()).toHaveClass(styles.img);
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

    expect(getImageBaseImgEl()).toHaveClass(styles.imgKeepRatio);
  });

  it('check set widthSize and heightSize in string format', () => {
    render(<ImageBaseTest src="#" widthSize="100px" heightSize="200px" />);

    expect(getImageBaseRootEl()).toHaveStyle('width: 100px; height: 200px');
  });

  it('check set widthSize and heightSize in number format', () => {
    render(<ImageBaseTest src="#" widthSize={100} heightSize={200} />);

    expect(getImageBaseRootEl()).toHaveStyle('width: 100px; height: 200px');
  });

  it('check set widthSize and heightSize in incorrect format', () => {
    render(<ImageBaseTest src="#" widthSize="100" heightSize="200" />);

    expect(getImageBaseRootEl()).not.toHaveStyle('width: 100px; height: 200px');
  });

  it('should have specific className with withTransparentBackground prop', () => {
    render(<ImageBaseTest src="#" withTransparentBackground={true} />);

    expect(getImageBaseRootEl()).toHaveClass(styles.transparentBackground);
  });

  it('should apply custom objectPosition style', () => {
    render(<ImageBaseTest src="#" objectPosition="center bottom" />);

    expect(getImageBaseImgEl()).toHaveClass(styles.withObjectPosition);
    expect(getImageBaseImgEl()).toHaveStyle({
      '--vkui_internal--ImageBase_object_position': 'center bottom',
    });
  });

  describe('DEV errros', () => {
    beforeEach(() => setNodeEnv('development'));
    afterEach(() => setNodeEnv('test'));

    it('check error when use incorrect size of icon', () => {
      render(<ImageBaseTest fallbackIcon={<Icon20Add />} size={28} />);
      expect(logStub).toHaveBeenCalledTimes(1);
    });
  });
});

describe(getOverlayIconSizeByImageBaseSize, () => {
  it.each([
    [20, 12],
    [24, 16],
    [28, 18],
    [40, 20],
    [48, 24],
    [88, 28],
    [89, getOverlayIconSizeByImageBaseSize.MAX_SIZE],
  ])('should return correct icon size by image size %s', (imageSize, expectedSize) => {
    expect(getOverlayIconSizeByImageBaseSize(imageSize)).toBe(expectedSize);
  });
});

describe(getFallbackIconSizeByImageBaseSize, () => {
  it.each([
    [20, 12],
    [28, 16],
    [32, 20],
    [44, 24],
    [64, 28],
    [65, getFallbackIconSizeByImageBaseSize.MAX_SIZE],
  ])('should return correct icon size by image size %s', (imageSize, expectedSize) => {
    expect(getFallbackIconSizeByImageBaseSize(imageSize)).toBe(expectedSize);
  });
});

describe(getBadgeIconSizeByImageBaseSize, () => {
  it.each([
    [36, 12],
    [48, 16],
    [64, 20],
    [65, getBadgeIconSizeByImageBaseSize.MAX_SIZE],
  ])('should return correct icon size by image size %s', (imageSize, expectedSize) => {
    expect(getBadgeIconSizeByImageBaseSize(imageSize)).toBe(expectedSize);
  });
});

const MockedIcon = ({ width }: { width?: number }) => {
  return <div style={{ width }} />;
};

describe(validateFallbackIcon, () => {
  it.each([
    {
      imageSize: 28,
      icon: <Icon16Clear />,
      expectError: false,
    },
    {
      imageSize: 28,
      icon: <Icon16Clear width={20} />,
      expectError: true,
    },
    {
      imageSize: 28,
      icon: <MockedIcon width={16} />,
      expectError: false,
    },
    {
      imageSize: 28,
      icon: <MockedIcon />,
      expectError: false,
    },
    {
      imageSize: 67,
      icon: <Icon96GoodsCollection />,
      expectError: false,
    },
  ])(
    'should error $expectError with imageSize $imageSize and $icon',
    ({ imageSize, icon, expectError }) => {
      validateFallbackIcon(imageSize, { name: 'fallbackIcon', value: icon });
      expect(logStub).toHaveBeenCalledTimes(expectError ? 1 : 0);
    },
  );
});

describe(validateSize, () => {
  const fixtures: Array<[number, boolean]> = imageBaseSizes.map((size) => [size, false]);
  it.each<[number, boolean]>([
    ...fixtures,
    [Math.max(...imageBaseSizes) + 1, false],
    [Math.min(...imageBaseSizes) - 1, true],
    [21, true],
  ])('should log error with size %s', (size, expectError) => {
    validateSize(size);
    expect(logStub).toHaveBeenCalledTimes(expectError ? 1 : 0);
  });
});

describe(validateBadgeIcon, () => {
  it.each([
    {
      imageSize: 20,
      icon: <Icon16Clear />,
      expectError: true,
    },
    {
      imageSize: 36,
      icon: <Icon12Add />,
      expectError: false,
    },
    {
      imageSize: 37,
      icon: <Icon12Add />,
      expectError: true,
    },
  ])(
    `should expect error $expectError with imageSize $imageSize`,
    ({ imageSize, icon, expectError }) => {
      validateBadgeIcon(imageSize, { name: 'badgeIcon', value: icon });
      expect(logStub).toHaveBeenCalledTimes(expectError ? 1 : 0);
    },
  );
});

describe(validateOverlayIcon, () => {
  it.each([
    {
      imageSize: 20,
      icon: <Icon12Add />,
      expectError: false,
    },
    {
      imageSize: 21,
      icon: <Icon12Add />,
      expectError: true,
    },
  ])(
    `should expect error $expectError with imageSize $imageSize`,
    ({ imageSize, icon, expectError }) => {
      validateOverlayIcon(imageSize, { name: 'badgeIcon', value: icon });
      expect(logStub).toHaveBeenCalledTimes(expectError ? 1 : 0);
    },
  );
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
