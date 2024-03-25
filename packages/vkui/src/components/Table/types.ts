import type { LiteralUnion } from '../../types';

export type TableContextProps = {
  padding?: LiteralUnion<'xs' | 's' | 'm' | 'l', number | string>;
  enableZebraStripes?: boolean;
};

export type TableSectionType = 'header' | 'body' | 'footer';

export type TableSectionContextProps =
  | {
      type: 'header';
      isSticky: boolean;
    }
  | {
      type: 'body';
    }
  | {
      type: 'footer';
      isSticky: boolean;
    };
