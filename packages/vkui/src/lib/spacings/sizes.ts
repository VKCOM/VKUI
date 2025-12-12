import type { LiteralUnion } from '../../types';

export const DESIGN_SYSTEM_SIZES = ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl'] as const;

export type DesignSystemSize = (typeof DESIGN_SYSTEM_SIZES)[number];

export type SpacingSizeProp = LiteralUnion<DesignSystemSize | `--${string}`, number>;
