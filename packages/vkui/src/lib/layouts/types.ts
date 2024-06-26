import { LiteralUnion } from '../../types';

export type SingleGapProp = LiteralUnion<4 | 8 | 16 | 24 | 32, number>;

export type GapProp = SingleGapProp | [SingleGapProp, SingleGapProp];
