import { LiteralUnion } from '../../types';

export type Gap = LiteralUnion<4 | 8 | 16 | 24 | 32, number>;

export type GridGaps = Gap | [Gap, Gap];
