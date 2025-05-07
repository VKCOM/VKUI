import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { useStableCallback } from '../../hooks/useStableCallback';
import { type TabsProps } from './Tabs';

/* eslint-disable jsdoc/require-jsdoc */
export type TabsController = {
  onChange: (id: string) => void;
  selectedTab: string;
};
/* eslint-enable jsdoc/require-jsdoc */

export const useTabsController = ({
  selectedId,
  defaultSelectedId,
  onSelectedChange: onSelectedTabChangeProp,
}: Pick<
  TabsProps,
  'selectedId' | 'defaultSelectedId' | 'onSelectedChange'
>): TabsController | null => {
  const onSelectedChange = useStableCallback(
    (id: string | undefined) => id && onSelectedTabChangeProp?.(id),
  );

  const [value, onChange] = useCustomEnsuredControl<string | undefined>({
    onChange: onSelectedChange,
    value: selectedId,
    defaultValue: defaultSelectedId,
  });

  if ((!selectedId && !defaultSelectedId) || !value) {
    return null;
  }
  return {
    onChange,
    selectedTab: value,
  };
};
