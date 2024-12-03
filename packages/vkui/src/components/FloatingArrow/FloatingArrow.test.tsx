import { render } from '@testing-library/react';
import type { Placement } from '../../lib/floating';
import { baselineComponent } from '../../testing/utils';
import { FloatingArrow, placementClassNames } from './FloatingArrow';

const PLACEMENT = ['top', 'right', 'bottom', 'left'] as const;
const PLACEMENT_WITH_SIDE = PLACEMENT.reduce<Placement[]>((acc, placement) => {
  acc.push(placement, `${placement}-start`, `${placement}-end`);
  return acc;
}, []);

describe(FloatingArrow, () => {
  baselineComponent(FloatingArrow);

  test('props to icon', () => {
    const result = render(
      <FloatingArrow data-testid="host" iconClassName="icon" iconStyle={{ display: 'none' }} />,
    );

    const icon = result.getByTestId('host').querySelector('.icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle({ display: 'none' });
  });

  test.each(PLACEMENT_WITH_SIDE)('arrow position for %s placement', (placement) => {
    const result = render(<FloatingArrow data-testid="host" placement={placement} />);

    if (placement.startsWith('top')) {
      expect(result.getByTestId('host')).toHaveClass(placementClassNames.bottom);
    } else if (placement.startsWith('right')) {
      expect(result.getByTestId('host')).toHaveClass(placementClassNames.left);
    } else if (placement.startsWith('bottom')) {
      expect(result.getByTestId('host')).not.toHaveClass(...Object.values(placementClassNames));
    } else if (placement.startsWith('left')) {
      expect(result.getByTestId('host')).toHaveClass(placementClassNames.right);
    }
  });

  test.each(PLACEMENT_WITH_SIDE)('arrow offset by %s placement', (placement) => {
    const result = render(
      <FloatingArrow data-testid="host" coords={{ x: 6, y: 8 }} offset={8} placement={placement} />,
    );

    if (placement.startsWith('top')) {
      expect(result.getByTestId('host')).toHaveStyle({ top: '100%', left: '14px' });
    } else if (placement.startsWith('right')) {
      expect(result.getByTestId('host')).toHaveStyle({ left: '0px', top: '16px' });
    } else if (placement.startsWith('bottom')) {
      expect(result.getByTestId('host')).toHaveStyle({ bottom: '100%', left: '14px' });
    } else if (placement.startsWith('left')) {
      expect(result.getByTestId('host')).toHaveStyle({ right: '0px', top: '16px' });
    }
  });

  test.each(PLACEMENT_WITH_SIDE)('arrow static offset by %s placement', (placement) => {
    const result = render(
      <FloatingArrow
        data-testid="host"
        coords={{ x: 6, y: 8 }}
        isStaticOffset
        offset={8}
        placement={placement}
      />,
    );

    if (placement.endsWith('end')) {
      if (placement.startsWith('top')) {
        expect(result.getByTestId('host')).toHaveStyle({ top: '100%', right: '8px' });
      } else if (placement.startsWith('right')) {
        expect(result.getByTestId('host')).toHaveStyle({ left: '0px', bottom: '8px' });
      } else if (placement.startsWith('bottom')) {
        expect(result.getByTestId('host')).toHaveStyle({ bottom: '100%', right: '8px' });
      } else if (placement.startsWith('left')) {
        expect(result.getByTestId('host')).toHaveStyle({ right: '0px', bottom: '8px' });
      }
    } else {
      if (placement.startsWith('top')) {
        expect(result.getByTestId('host')).toHaveStyle({ top: '100%', left: '8px' });
      } else if (placement.startsWith('right')) {
        expect(result.getByTestId('host')).toHaveStyle({ left: '0px', top: '8px' });
      } else if (placement.startsWith('bottom')) {
        expect(result.getByTestId('host')).toHaveStyle({ bottom: '100%', left: '8px' });
      } else if (placement.startsWith('left')) {
        expect(result.getByTestId('host')).toHaveStyle({ right: '0px', top: '8px' });
      }
    }
  });
});
